
// Import of needed modules
const readline = require('readline');
const { getFollowUpQuestions, getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { extractSymptoms } = require('../llm/extractSymptoms');
const { savePatientCase } = require('../graph-db/storeData');
const { cacheDiagnosis } = require('../graph-db/diagnosisCache');



// function to split full diagnosis text into diagnosis and recommendation
function splitDiagnosisRecommendation(diagnosisText) {
    let diagnosis = "";
    let recommendation = "";

    const diagnosisMatch = diagnosisText.match(/Diagnosis:\s*(.*)/i);
  
    const recommendationMatch = diagnosisText.match(/Recommendation:\s*(.*)/i);

    if (diagnosisMatch) {
        diagnosis = diagnosisMatch[1].trim();
    }

    if (recommendationMatch) {
        recommendation = recommendationMatch[1].trim();
    }

    return { diagnosis, recommendation };
}


console.log('start llm medical symptoms app');

// readline-interface to enable interaction with the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function askQuestion(prompt) {
    return new Promise(resolve => {
        rl.question(prompt, answer => {
            resolve(answer.trim());
        });
    });
}

(async () => {
    try {

        // get age and gender of the patient
        const age = await askQuestion("How old is the patient? ");
        const gender = await askQuestion("What is the patients gender? ");
        
        // store user input as string (answer to "what are yout symptoms?")
        let userInput = await askQuestion("Welche Symptome hast du? ");

        // extract symptoms from the user input and storage in array "symptoms"
        let symptoms = await extractSymptoms(userInput);
        if (!Array.isArray(symptoms)){
            symptoms = symptoms ? [symptoms] : [];
        }

        let answers = []; // stores question-answer-pairs
        let keepAsking = true;
        let maxQuestions = 5; // number of follow up questions

        // llm asks questions based on symptoms
        while (keepAsking && answers.length < maxQuestions) {
            const question = await getFollowUpQuestions(symptoms, answers);
            console.log(`Question: ${question}`);

            const answer = await askQuestion("> ");
            if (!answer) {
                // no answer --> system stops
                keepAsking = false;
            } else {
                answers.push(`${question} Antwort: ${answer}`);

          // store symptom if user answers with yes
          if (answer.toLowerCase().startsWith('ja') || answer.toLowerCase().startsWith('yes')) {
            const symptomsFromQuestion = await extractSymptoms(question);
            if (symptomsFromQuestion) {
                const newSympArr = Array.isArray(symptomsFromQuestion)
                ? symptomsFromQuestion
                : [symptomsFromQuestion];

            // get all symptoms in an array and delete duplicates
            symptoms = [...new Set([...symptoms, ...newSympArr.map(s => s.toLowerCase().trim())])];
    }
}


                

                // output symptoms to test extractSymptoms-Function
                console.log("\nAktuelle gesammelte Symptome:", symptoms.map(s => s.toLowerCase().trim()).join(', '));
            }
        }

        // get diagnosis from llm
// Versuch Cache-Diagnose zu finden
//console.log("\nPrüfe, ob Diagnose bereits im Cache vorhanden ist...\n");
//const cached = await cacheDiagnosis(symptoms);

//let diagnosisFull;
//if (cached) {
//    console.log(`Gefundene Diagnose im Cache (PatientID: ${cached.patientId}): ${cached.diagnosis}`);
//    diagnosisFull = `Diagnosis: ${cached.diagnosis}\nRecommendation: (aus Cache – keine Empfehlung gespeichert)`;
//} else {
//    console.log("Keine passende Diagnose im Cache gefunden. Hole Diagnose vom LLM...\n");
//    diagnosisFull = await getDiagnosis(symptoms, answers);
//}

// Versuche Cache-Diagnose zu finden
console.log("\nPrüfe, ob Diagnose bereits im Cache vorhanden ist...\n");
const cached = await cacheDiagnosis(symptoms);

let diagnosisFull;

if (cached && cached.cached === true && cached.diagnosis && cached.diagnosis.trim() !== "") {
    console.log(`Gefundene Diagnose im Cache (PatientID: ${cached.patientId}): ${cached.diagnosis}`);
    diagnosisFull = `Diagnosis: ${cached.diagnosis}\nRecommendation: (aus Cache – keine Empfehlung gespeichert)`;
} else {
    console.log("Keine passende Diagnose im Cache gefunden. Hole Diagnose vom LLM...\n");
    diagnosisFull = await getDiagnosis(symptoms, answers);
    console.log(diagnosisFull);
}






      //  console.log("\nHole Diagnose vom LLM...\n");
       // const diagnosisFull = await getDiagnosis(symptoms, answers);
       // console.log("Mögliche Diagnose / Empfehlung:\n");
       // console.log(diagnosisFull);


        // extract diagnosis and recommendation
        const { diagnosis, recommendation } = splitDiagnosisRecommendation(diagnosisFull);


        // save patient case in neo4j
        await savePatientCase({

            patientId: "patient_" + crypto.randomUUID(),
            age,
            gender,
            allSymptoms: symptoms,
            followUpQA: answers.map(ans => {
                const [question, ...answerParts] = ans.split(' Antwort: ');
                return {
                    question: question.trim(),
                    answer: answerParts.join(' Antwort: ').trim()
                };
            }),
            diagnosis,
            recommendation
        
        });




    } catch (err) {
        console.error("Fehler:", err);
    } finally {
        rl.close();
    }
})();
