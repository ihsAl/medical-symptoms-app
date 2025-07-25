// functions used to evaluate correctness of LLM diagnosis
const { extractSymptoms } = require('../llm/extractSymptoms');
const { getDiagnosis } = require('../llm/llmQuestionsDiagnosis');
const { splitDiagnosisRecommendation } = require('../llm/splitDiagnosisRecommendation');
// file which is used to test LLM answers
const { dataset2 } = require('./dataset2.js')

// array collecting True/False values for LLM giving out the same diagnosis as the dataset
let correctAnswers = []

// needs to be moved
// function splitDiagnosisRecommendation(diagnosisText) {
//     let diagnosis = "";
//     let recommendation = "";

//     const diagnosisMatch = diagnosisText.match(/Diagnosis:\s*(.*)/i);
  
//     const recommendationMatch = diagnosisText.match(/Recommendation:\s*(.*)/i);

//     if (diagnosisMatch) {
//         diagnosis = diagnosisMatch[1].trim();
//     }

//     if (recommendationMatch) {
//         recommendation = recommendationMatch[1].trim();
//     }

//     return { diagnosis, recommendation };
// }

// testing LLM answers on file with diagnosis and symptoms
async function testDataset(testCase) {
  try { // extracting symptoms from csv array
    let symptoms = await extractSymptoms(dataset2[testCase][2]);
    if (!Array.isArray(symptoms)){
      symptoms = symptoms ? [symptoms] : [];
    }
    console.log(`Symptome: ${symptoms}`);
    // get diagnosis using symptoms and no answers
    let diagnosisFull = await getDiagnosis(symptoms, []);
    console.log(diagnosisFull);
    // split diagnosis and recommendation from each other
    // recommendation is not used anywhere in this function
    const { diagnosis, recommendation } = splitDiagnosisRecommendation(diagnosisFull);
    // if diagnosis from LLM is same as in the test case, save 1, otherwise 0
    if (diagnosis == dataset2[testCase][1]){ 
        correctAnswers.push(1)
      } else {
        correctAnswers.push(0);
      };
    console.log('Array with correct and wrong answers as True or False')
    console.log(correctAnswers)
  } catch (err) {
    console.error('Error:', err);
  } finally {
    // gives out the amount of correct and wrong answers
    console.log(`Amount of correct answers`)
    console.log(correctAnswers.filter((True) => True == 1).length)
    console.log(`Amount of wrong answers`)
    console.log(correctAnswers.filter((False) => False == 0).length)
  }
}

for (let indexCase = 0; indexCase < dataset2.length; indexCase++) {
  testDataset(indexCase)
}

// for (let indexCase = 0; indexCase < 50; indexCase++) {
//   testDataset(indexCase)
// }