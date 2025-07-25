// backend/testLLM.js
const { askLLM } = require('./llmService');

async function getFollowUpQuestions(symptoms, previousAnswer) {
    const prompt = `
You are a medical assistant.

A patient reports symptoms: ${symptoms}.

Based on previous answers:
${previousAnswer.map((a,i) => `Answer ${i+1}: ${a}`).join('\n')}

Ask exactly one specific, clear medical follow-up question. 

Rules:
- Do NOT use "or" or "and".
- Ask about only ONE symptom or detail per question.
- Do NOT combine multiple symptoms or options.
- Do NOT include greetings or explanations.
- Only output the single question.

Examples:
- Good: "Do you have a fever?"
- Bad: "Do you have a fever or chills?"

**ask only one symptom per question**
**dont use "or" in question**
**dont use "and" in questions**

Answer only with the question, in English.
`
    return await askLLM(prompt);
}

async function getDiagnosis(symptoms, answers) {
    const prompt = `
Symptoms: ${symptoms}  
Answers:  
${answers.join('\n')}

Provide a possible **medical diagnosis** 
and a recommendation for what the patient should do, using the following format:

Assessment/Diagnosis: [a single medical term]  
Recommendation: [max. two short sentences]

Only answer in English. Do not include any additional explanation or greeting.
**In the diagnosis do not use "()" only one word**
`;

    //console.log('prompt an llm:');
    //console.log(prompt);
    return await askLLM(prompt);
}

module.exports = { getFollowUpQuestions, getDiagnosis };
