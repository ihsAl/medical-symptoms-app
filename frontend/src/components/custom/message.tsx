import { motion } from 'framer-motion';
import { cx } from 'classix';
import { BotIcon } from './icons';
import { Markdown } from './markdown';
import { message } from "../../interfaces/interfaces"


// This component makes the user message previewable in the chat interface.
// It displays the message content with custom styles and animations.
export const PreviewMessage = ({ message }: { message: message; }) => {

  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      data-role={message.role}
    >
      <div
        className={cx(
          'group-data-[role=user]/message:bg-zinc-700 dark:group-data-[role=user]/message:bg-muted group-data-[role=user]/message:text-white flex gap-4 group-data-[role=user]/message:px-3 w-full group-data-[role=user]/message:w-fit group-data-[role=user]/message:ml-auto group-data-[role=user]/message:max-w-2xl group-data-[role=user]/message:py-2 rounded-xl'
        )}
      >
        {message.role === 'assistant' && (
          <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
            <BotIcon size={14} />
          </div>
        )}

        <div className="flex flex-col w-full">
          {message.content && (
            <div className="flex flex-col gap-4 text-left break-words whitespace-pre-wrap">
              <Markdown>{message.content}</Markdown>
            </div>
          )}
          
        </div>
      </div>
    </motion.div>
  );
};

export const ThinkingMessage = () => {
  const role = 'assistant';

  return (
    <motion.div
      className="w-full mx-auto max-w-3xl px-4 group/message"
      initial={{ y: 5, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      data-role={role}
    >
      <div
        className={cx(
          'flex gap-4 px-3 py-2 w-fit max-w-2xl rounded-xl bg-background text-foreground'
        )}
      >
        <div className="size-8 flex items-center rounded-full justify-center ring-1 shrink-0 ring-border">
          <BotIcon size={14} />
        </div>

        <div className="flex gap-1 items-center">
          <span className="animate-bounce w-2 h-2 bg-gray-500 rounded-full [animation-delay:0ms]"></span>
          <span className="animate-bounce w-2 h-2 bg-gray-500 rounded-full [animation-delay:150ms]"></span>
          <span className="animate-bounce w-2 h-2 bg-gray-500 rounded-full [animation-delay:300ms]"></span>
        </div>
      </div>
    </motion.div>
  );
};
