const WebSocket = require('ws');
const { getFollowUpQuestions, getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { extractSymptoms } = require('../llm/extractSymptoms');
const { savePatientCase } = require('../graph-db/storeData');
const { cacheDiagnosis } = require('../graph-db/diagnosisCache');
const crypto = require('crypto');

function createNewSession() {
  return {
    step: 1,
    //age: null,
    //gender: null,
    symptomsText: '',
    symptoms: [],
    answers: [],
    questionCount: 0,
    maxQuestions: 5,
    currentQuestion: ''
  };
}

const wss = new WebSocket.Server({ port: 8090 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  let session = createNewSession();

  ws.on('message', async (message) => {
    const text = message.toString().trim();

    try {
      switch (session.step) {
  
  // Case 1: Symptome analysieren und erste Frage stellen
  case 1:
    if (!text || text.trim() === "") {
      ws.send("Please describe your symptoms");
      return;
  }

    session.symptomsText = text;
    const extracted = await extractSymptoms(text);
    session.symptoms = Array.isArray(extracted) ? extracted : (extracted ? [extracted] : []);
    //session.step = 2;

    const firstQuestion = await getFollowUpQuestions(
      session.symptoms,
      session.answers.map(a => `${a.question} Answer: ${a.answer}`)
    );

    if (firstQuestion && firstQuestion.trim() !== "") {
      session.currentQuestion = firstQuestion.trim();
      session.questionCount++;
      ws.send(session.currentQuestion);
      session.step = 3; // Warte auf Antwort
    } else {
      session.step = 4; // Sofort zur Diagnose
      ws.emit('message', '');
    }
    break;

  // Case 5: Folgefragen/Antworten
  case 3: {
    const answer = text;
    
    if (!answer || answer.trim() === "") {
      ws.send(`Please answer the current question:\n${session.currentQuestion}`);
      return; 
  }

    session.answers.push({
      question: session.currentQuestion,
      answer: answer
    });

    if (answer.toLowerCase().startsWith('ja') || answer.toLowerCase().startsWith('yes')) {
      const extra = await extractSymptoms(session.currentQuestion);
      if (extra) {
        const extras = Array.isArray(extra) ? extra : [extra];
        session.symptoms = [...new Set([...session.symptoms, ...extras.map(s => s.toLowerCase().trim())])];
      }
    }

    if (session.questionCount < session.maxQuestions) {
      const nextQ = await getFollowUpQuestions(
        session.symptoms,
        session.answers.map(a => `"${a.question}" Answer: ${a.answer}`)
      );

      if (nextQ && !session.answers.some(a => a.question.trim() === nextQ.trim())) {
        session.currentQuestion = nextQ.trim();
        session.questionCount++;
        ws.send(session.currentQuestion);
        // Bleibe in Step 5
      } else {
        session.step = 4;
        ws.emit('message', '');
      }
    } else {
      session.step = 4;
      ws.emit('message', '');
    }

    break;
  }

  // Case 4: Diagnose ermitteln und speichern
  case 4:
    ws.send("\nGet Diagnosis...\n");

    const cached = await cacheDiagnosis(session.symptoms);

    let diagnosisFull;
    if (cached?.cached && cached.diagnosis?.trim()) {

      diagnosisFull = `Diagnosis: ${cached.diagnosis}\nRecommendation: ${cached.recommendation}`;
    } else {
      diagnosisFull = await getDiagnosis(
        session.symptoms,
        session.answers.map(a => `${a.question} Answer: ${a.answer}`)
      );
    }

    const diagnosisMatch = diagnosisFull.match(/Diagnosis:\s*(.*)/i);
    const recommendationMatch = diagnosisFull.match(/Recommendation:\s*(.*)/i);
    const diagnosis = diagnosisMatch ? diagnosisMatch[1].trim() : '';
    const recommendation = recommendationMatch ? recommendationMatch[1].trim() : '';

    await savePatientCase({
      patientId: "patient_" + crypto.randomUUID(),
      //age: session.age,
      //gender: session.gender,
      allSymptoms: session.symptoms,
      followUpQA: session.answers.map(ans => ({ question: ans.question, answer: ans.answer })),
      diagnosis,
      recommendation
    });

    ws.send(JSON.stringify({
      type: 'diagnosis',
      diagnosis,
      recommendation,
      fromCache: !!cached?.cached
    }));

    ws.send("[END]");
    session = createNewSession();
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
