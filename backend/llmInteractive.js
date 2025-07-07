//test llm Prompts in terminal 
const readline = require('readline');
const { getFollowUpQuestions, getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { extractSymptoms } = require('../llm/SymptomExtractor');


console.log('start llm');

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
        const symptoms = await askQuestion("Welche Symptome hast du? ");

        let answers = [];
        let keepAsking = true;
        let maxQuestions = 5; // max Rückfragen, kann beliebig angepasst werden

        while (keepAsking && answers.length < maxQuestions) {
            const question = await getFollowUpQuestions(symptoms, answers);
            console.log(`\nFrage: ${question}`);

            const answer = await askQuestion("> ");
            if (!answer) {
                // Leere Antwort: abbrechen
                keepAsking = false;
            } else {
                answers.push(`${question} Antwort: ${answer}`);
            }
        }

        console.log("\nHole Diagnose vom LLM...\n");
        const diagnosis = await getDiagnosis(symptoms, answers);
        console.log("Mögliche Diagnose / Empfehlung:\n");
        console.log(diagnosis);

    } catch (err) {
        console.error("Fehler:", err);
    } finally {
        rl.close();
    }
})();