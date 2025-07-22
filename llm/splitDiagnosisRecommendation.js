
// function to split full diagnosis text into diagnosis and recommendation
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

module.exports = { splitDiagnosisRecommendation };