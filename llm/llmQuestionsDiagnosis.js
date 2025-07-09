// backend/testLLM.js
const { askLLM } = require('./llmService');

async function getFollowUpQuestions(symptoms, previousAnswer) {
    const prompt = `
You are a medical assistant.  
A patient reports the following symptoms: ${symptoms}.  
Based on the previous answers:  
${previousAnswer.map((a,i) => `Answer ${i+1}: ${a}`).join('\n')}  

Ask **one specific medical follow-up question** in **English** related to the reported symptoms and previous answers.  
Do **not** include any introductions, explanations, or greetings.  
Only output the **single follow-up question** in clear, correct English.  
The first sentence must directly be a medically relevant follow-up question. 
only ask about one accompanying symptom per question. Dont use "or", "and" in your questions. 
Do not group multiple symptoms in a question.
Answer format: A single, clear question only.
`
    return await askLLM(prompt);
}

async function getDiagnosis(symptoms, answers) {
    const prompt = `
Symptoms: ${symptoms}  
Answers:  
${answers.join('\n')}

Provide a possible **medical assessment** (not a final diagnosis)  
and a recommendation for what the patient should do, using the following format:

Assessment/Diagnosis: [one word]  
Recommendation: [max. two short sentences]

Only answer in English. Do not include any additional explanation or greeting.

`;
    return await askLLM(prompt);
}

module.exports = { getFollowUpQuestions, getDiagnosis };
