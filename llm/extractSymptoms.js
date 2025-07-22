const { askLLM } = require('./llmService');

async function extractSymptoms(text) {
    const prompt = `
Extract all clear, distinct medical symptoms from the following text.  
Ignore vague or descriptive words like "worsening", "severe", or "mild".  
Only include specific symptom terms such as "fever", "nausea", "chest pain", etc.  
Do not include adjectives, severity modifiers, or ambiguous terms.  
Return the result as a JSON array of lowercase strings.

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
