//Kommunikation mit LLM (Ollama)

const axios = require('axios');

const OLLAMA_API = 'http://localhost:11434/api/generate';


// use model mistral-instruct instead of mistral because it perfoms better in dialog
async function askLLM(prompt) {
    try {
        const response = await axios.post(OLLAMA_API, {
            model: 'mistral:instruct',
            prompt: prompt,
            stream: false
        });

        return response.data.response;
    } catch (err) {
        console.error('Fehler bei der LLM-Anfrage:', err.message);
        return null;
    }
}

module.exports = { askLLM };



