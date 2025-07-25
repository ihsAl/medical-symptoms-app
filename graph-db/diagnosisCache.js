// graph-db/diagnosisCache.js
const {driver} = require('./neo4jService');

async function cacheDiagnosis(symptomList) {
    const session = driver.session();
    try {
        const result = await session.run(
            `
            MATCH (p:Patient)-[:HAS_SYMPTOM]->(s:Symptom)
            WITH p, collect(DISTINCT s.name) AS symptoms
            WHERE all(sym IN $inputSymptoms WHERE sym IN symptoms)
            MATCH (p)-[:HAS_DIAGNOSIS]->(d:Diagnosis)
            RETURN d.text AS diagnosis, p.id AS patientId, d.recommendation AS recommendation
            LIMIT 1
            `,
            { inputSymptoms: symptomList }
        );

        console.log("Cache Query Result:", result.records);

        if (result.records.length > 0) {
            const record = result.records[0];
            const diagnosis = record.get('diagnosis');
            const patientId = record.get('patientId');
            const recommendation = record.get('recommendation');

             if (!diagnosis || diagnosis.trim() === "") {
                return { cached: false };
            }

            if (diagnosis && patientId) {
                return {
                cached: true,
                diagnosis: record.get('diagnosis'),
                patientId: record.get('patientId'),
                recommendation: record.get('recommendation'),

                };

            }

            
        } else {
            return { cached: false };
        }
    } finally {
        await session.close();
    }
}

module.exports = { cacheDiagnosis };
