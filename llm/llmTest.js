const { getFollowUpQuestions, getDiagnosis } = require('./llmQuestionsDiagnosis');

(async () => {
    const symptoms = "Fieber und Bauchschmerzen";
    const followUps = await getFollowUpQuestions(symptoms);
    console.log("Rückfragen:", followUps);

    const answers = "1. Seit 2 Tagen, 2. Schmerz rechts unten, stechend.";
    const diagnosis = await getDiagnosis(symptoms, answers);
    console.log("Diagnose:", diagnosis);
})();
