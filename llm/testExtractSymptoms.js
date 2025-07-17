const { extractSymptoms } = require('./extractSymptoms');

(async () => {
    const input = "Ich habe seit gestern Bauchschmerzen, Fieber und Übelkeit und auch ist mir etwas schwindelig.";
    
    const symptoms = await extractSymptoms(input);
    
    console.log("Extrahierte Symptome:");
    console.log(symptoms);
})();
