const { extractSymptoms } = require('../llm/extractSymptoms');
const { getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { dataset } = require('./dataset.js')

let correctAnswers = []

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

async function testDataset(testCase) {
  try {
    let symptoms = await extractSymptoms(dataset[testCase][2]);
    if (!Array.isArray(symptoms)){
      symptoms = symptoms ? [symptoms] : [];
    }
    console.log(`Symptome ${symptoms}`);
    let diagnosisFull = await getDiagnosis(symptoms, []);
    console.log(diagnosisFull);
    const { diagnosis, recommendation } = splitDiagnosisRecommendation(diagnosisFull);
    if (diagnosis == dataset[testCase][1]){ 
        correctAnswers.push(1)
      } else {
        correctAnswers.push(0);
      };
    console.log(correctAnswers)
  } catch (err) {
    console.error("Fehler:", err);
  }
}

for (let indexCase = 0; indexCase < dataset.length; indexCase++) {
  testDataset(indexCase)
}

// testDataset(0)