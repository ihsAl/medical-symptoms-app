const { askLLM } = require('./llmService');

function normalizeSymptom(symptom){
    return symptom
        .toLowerCase()
        .replace(/_/g, ' ')       // Unterstriche durch Leerzeichen ersetzen
        .replace(/\s+/g, ' ')     // Mehrfache Leerzeichen auf eins reduzieren
        .trim();                  // Anfang/Ende Leerzeichen entfernen

}


async function extractSymptoms(text) {
    const prompt = `
Extract all clear, distinct medical symptoms from the following text.  
Ignore vague or descriptive words like "worsening", "severe", or "mild".  
Only include specific symptom terms such as "fever", "nausea", "chest pain", etc.  
Do not include adjectives, severity modifiers, or ambiguous terms.  
Return the result as a JSON array of lowercase strings. Return only a valid JSON array e.g. ["headache", "chest pain"].

Text: "${text}"
Response format: ["symptom1", "symptom2", ...]
    `;

    const response = await askLLM(prompt);
    console.log("Raw LLM response:", response);  // Debug

    try {
        // clean response from backslahes to avoid error
        const cleanResponse = response.replace(/\\_/g, '_');
        const symptoms = JSON.parse(cleanResponse);

        // normalize symptoms 
        const normalizedSymptoms = symptoms.map(normalizeSymptom);
        return normalizedSymptoms;

    } catch (err) {
        console.error("Fehler beim Parsen der Symptome:", err.message);

        // Fallback: Extract strings inside double quotes
        const matches = [...response.matchAll(/"([^"]+)"/g)];
        const fallbackSymptoms = matches.map(m => normalizeSymptom(m[1]));

        console.log(" Extracted via fallback:", fallbackSymptoms);
        return fallbackSymptoms;
        //return [];
    }
}

module.exports = { extractSymptoms };
