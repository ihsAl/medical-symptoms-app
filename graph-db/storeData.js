// storeData.js
const { driver } = require('./neo4jService');

async function savePatientCase({patientId, allSymptoms, followUpQA, diagnosis, recommendation}) {
    const session = driver.session();
    try {
        const result = await session.writeTransaction(tx =>
            tx.run(
                `
                MERGE (p:Patient {id: $patientId})
                

                WITH p
                UNWIND $symptoms AS sym
                MERGE (s:Symptom {name: sym})
                MERGE (p)-[:HAS_SYMPTOM]->(s)

                WITH p
                UNWIND $qa AS qa
                MERGE (q:FollowUpQuestion {text: qa.question})
                MERGE (a:Answer {text: qa.answer})
                MERGE (q)-[:ANSWERED_WITH]->(a)
                MERGE (p)-[:HAS_QA]->(q)

                WITH DISTINCT p
                CREATE (d:Diagnosis {diagnosis: $diagnosis, recommendation: $recommendation, timestamp: timestamp()})
                MERGE (p)-[:HAS_DIAGNOSIS]->(d)

                RETURN p, d
                `,
                {
                    patientId,
                    
                    
                    symptoms: allSymptoms,
                    qa: followUpQA,
                    diagnosis,
                    recommendation
                }
            )
        );

        console.log("Patient gespeichert:", result.summary.counters.updates());
    } catch (err) {
        console.error("Fehler beim Speichern:", err);
    } 
    finally {
        session.close();
    }
}

module.exports = { savePatientCase };
