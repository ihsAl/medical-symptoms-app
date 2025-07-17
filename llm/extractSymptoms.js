const { askLLM } = require('./llmService');

async function extractSymptoms(text) {
    const prompt = `
Extract all clear medical symptoms from the following text and return them as a JSON array of strings.  
Only include distinct, medically relevant symptom terms.  
Text: "${text}"
Response format: ["symptom1", "symptom2", ...]
    `;

    const response = await askLLM(prompt);

    try {
        const symptoms = JSON.parse(response);
        return symptoms;
    } catch (err) {
        console.error("Fehler beim Parsen der Symptome:", err.message);
        return [];
    }
}

module.exports = { extractSymptoms };
