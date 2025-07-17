function splitDiagnosisAndRecommendation(fullText) {
    let diagnosis = fullText;
    let recommendation = "";

    const diagnosisMatch = fullText.match(/Assessment\/Diagnosis:\s*(.+)/i);
    const recommendationMatch = fullText.match(/Recommendation:\s*(.+)/i);

    if (diagnosisMatch) {
        diagnosis = diagnosisMatch[1].trim();
    }

    if (recommendationMatch) {
        recommendation = recommendationMatch[1].trim();
    }

    return { diagnosis, recommendation };
}

module.exports = { splitDiagnosisAndRecommendation };
