import { ChatInput } from "@/components/custom/chatinput";
import { PreviewMessage, ThinkingMessage } from "../../components/custom/message";
import { useScrollToBottom } from '@/components/custom/use-scroll-to-bottom';
import { useState, useRef } from "react";
import { message } from "../../interfaces/interfaces"
import { Header } from "@/components/custom/header";
import { Overview } from "@/components/custom/overview";
import { useLocation } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

// WebSocket connection to the backend server
const socket = new WebSocket("ws://localhost:8090"); 

// Basically everything in this file is related to the chat functionality
// The Chat component handles the chat interface, message sending, and receiving responses from the server
export function Chat() {
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  const [messagesContainerRef, messagesEndRef] = useScrollToBottom<HTMLDivElement>();
  const [messages, setMessages] = useState<message[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const messageHandlerRef = useRef<((event: MessageEvent) => void) | null>(null);

  const cleanupMessageHandler = () => {
    if (messageHandlerRef.current && socket) {
      socket.removeEventListener("message", messageHandlerRef.current);
      messageHandlerRef.current = null;
    }
  };

async function handleSubmit(text?: string) {
  if (!socket || socket.readyState !== WebSocket.OPEN || isLoading) return;

  const messageText = text || question;
  setIsLoading(true);
  cleanupMessageHandler();
  
  const traceId = uuidv4();
  setMessages(prev => [...prev, { content: messageText, role: "user", id: traceId }]);
  socket.send(messageText);
  setQuestion("");

  try {
    const messageHandler = (event: MessageEvent) => {
      setIsLoading(false);
      if(event.data.includes("[END]")) {
        return;
      }
      
      setMessages(prev => {
        const lastMessage = prev[prev.length - 1];
        const newContent = lastMessage?.role === "assistant" 
          ? lastMessage.content + event.data 
          : event.data;
        
        const newMessage = { content: newContent, role: "assistant", id: traceId };
        return lastMessage?.role === "assistant"
          ? [...prev.slice(0, -1), newMessage]
          : [...prev, newMessage];
      });

      if (event.data.includes("[END]")) {
        cleanupMessageHandler();
      }
    };

    messageHandlerRef.current = messageHandler;
    socket.addEventListener("message", messageHandler);
  } catch (error) {
    console.error("WebSocket error:", error);
    setIsLoading(false);
  }
}

  return (
    <div className="flex flex-col min-w-0 h-dvh bg-gray-50">
      <Header userName={userName} />

    <div className="flex flex-col min-w-0 h-dvh bg-background">
      <div className="flex flex-col min-w-0 gap-6 flex-1 overflow-y-scroll pt-4" ref={messagesContainerRef}>
        {messages.length == 0 && <Overview />}
        {messages.map((message, index) => (
          <PreviewMessage key={index} message={message} />
        ))}
        {isLoading && <ThinkingMessage />}
        <div ref={messagesEndRef} className="shrink-0 min-w-[24px] min-h-[24px]"/>
      </div>
      <div className="flex mx-auto px-4 bg-background pb-4 md:pb-6 gap-2 w-full md:max-w-3xl">
        <ChatInput  
          question={question}
          setQuestion={setQuestion}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
    </div>
  );
};