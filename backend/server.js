// backend/server.js
const WebSocket = require('ws');
const { getFollowUpQuestions, getDiagnosis } = require('./llm/llmQuestionsDiagnosis.js');
const { v4: uuidv4 } = require('uuid');

// WebSocket-Server auf Port 8090
const wss = new WebSocket.Server({ port: 8090 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  // Track session data
  let symptoms = null;
  let answers = [];
  let questionCount = 0;

  ws.on('message', async (message) => {
    try {
      const text = message.toString();
      console.log('Received:', text);

      // Prüfe auf leere Nachrichten
      if (!text.trim()) {
        ws.send('Error: Empty message received.');
        return;
      }

      if (!symptoms) {
        // Erste Nachricht ist die Symptome
        symptoms = text;
        const followUp = await getFollowUpQuestions(symptoms, answers);
        questionCount++;
        ws.send(followUp);
      } else {
        // Nachfolgende Nachrichten sind Antworten
        answers.push(text);
        if (questionCount < 3) {
          // Stelle bis zu 3 Nachfragen
          const followUp = await getFollowUpQuestions(symptoms, answers);
          questionCount++;
          ws.send(followUp);
        } else {
          // Nach 3 Antworten: Diagnose erstellen
          const diagnosis = await getDiagnosis(symptoms, answers);
          ws.send(diagnosis);
          ws.send('[END]'); // Signalisiere Ende der Konversation

          // Zurücksetzen für neue Konversation
          symptoms = null;
          answers = [];
          questionCount = 0;
        }
      }
    } catch (error) {
      console.error('Error processing message:', error);
      ws.send(`Error: ${error.message || 'Unable to process your request.'}`);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('WebSocket server running on ws://localhost:8090');