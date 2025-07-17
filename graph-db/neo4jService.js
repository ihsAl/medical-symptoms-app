// Verbindungsdatei für Connection zu neo4j. 
const neo4j = require('neo4j-driver');

const uri = 'bolt://localhost:7687';
const user = 'neo4j';
const password = 'llmproject2025';

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//const session = driver.session();

async function closeConnection() {
   // await session.close();
    await driver.close();
}

module.exports = { driver, closeConnection };
