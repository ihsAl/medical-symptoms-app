const WebSocket = require('ws');
const { getFollowUpQuestions, getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { extractSymptoms } = require('../llm/extractSymptoms');
const { savePatientCase } = require('../graph-db/storeData');
const { cacheDiagnosis } = require('../graph-db/diagnosisCache');
const crypto = require('crypto');

const wss = new WebSocket.Server({ port: 8090 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  let session = {
    step: 0,
    age: null,
    gender: null,
    symptomsText: '',
    symptoms: [],
    answers: [],
    questionCount: 0,
    maxQuestions: 3,
    currentQuestion: ''
  };

  ws.on('message', async (message) => {
    const text = message.toString().trim();

    try {
      switch (session.step) {
        case 0:
          ws.send("Wie alt ist der Patient?");
          session.step++;
          break;

        case 1:
          session.age = text;
          ws.send("Was ist das Geschlecht des Patienten?");
          session.step++;
          break;

        case 2:
          session.gender = text;
          ws.send("Welche Symptome hast du?");
          session.step++;
          break;

        case 3:
          session.symptomsText = text;
          const extracted = await extractSymptoms(text);
          session.symptoms = Array.isArray(extracted) ? extracted : (extracted ? [extracted] : []);

          const followUp = await getFollowUpQuestions(session.symptoms, []);
          session.currentQuestion = followUp;
          session.questionCount++;
          session.step++;
          ws.send(followUp);
          break;

        case 4:
          // Speichere Antwort und ggf. weitere Symptome
        session.answers.push({
            question: session.currentQuestion,
            answer: text
          });

          

          if (text.toLowerCase().startsWith('ja') || text.toLowerCase().startsWith('yes')) {
            const extra = await extractSymptoms(session.currentQuestion);
            if (extra) {
              const extras = Array.isArray(extra) ? extra : [extra];
              session.symptoms = [...new Set([...session.symptoms, ...extras.map(s => s.toLowerCase().trim())])];
            }
          }

          if (session.questionCount < session.maxQuestions) {
            const nextQ = await getFollowUpQuestions(session.symptoms, session.answers);
            session.currentQuestion = nextQ;
            session.questionCount++;
            ws.send(nextQ);
          } else {
            // Diagnoseprozess
            ws.send("\nPrüfe, ob Diagnose bereits im Cache vorhanden ist...\n");
            const cached = await cacheDiagnosis(session.symptoms);

            let diagnosisFull;
            if (cached && cached.cached === true && cached.diagnosis?.trim()) {
              diagnosisFull = `Diagnosis: ${cached.diagnosis}\nRecommendation: (aus Cache – keine Empfehlung gespeichert)`;
            } else {
              diagnosisFull = await getDiagnosis(session.symptoms, session.answers);
            }

            // optional: Diagnose splitten
            const diagnosisMatch = diagnosisFull.match(/Diagnosis:\s*(.*)/i);
            const recommendationMatch = diagnosisFull.match(/Recommendation:\s*(.*)/i);
            const diagnosis = diagnosisMatch ? diagnosisMatch[1].trim() : '';
            const recommendation = recommendationMatch ? recommendationMatch[1].trim() : '';

            await savePatientCase({
              patientId: "patient_" + crypto.randomUUID(),
              age: session.age,
              gender: session.gender,
              allSymptoms: session.symptoms,
              followUpQA: session.answers.map(ans => ({ question: ans.question, answer: ans.answer })),
              diagnosis,
              recommendation
            });

            ws.send(diagnosisFull);
            ws.send('[END]');
            session = null;
          }

          break;
      }

    } catch (err) {
      console.error("Fehler:", err);
      ws.send("Ein Fehler ist aufgetreten: " + err.message);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log("WebSocket server running on ws://localhost:8090");
