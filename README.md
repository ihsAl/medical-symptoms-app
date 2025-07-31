# medical-symptoms-app
# How does the app work? 
This program allows a user to converse with Ollama Mistra LLM in order to find out what medical diagnosis applies to the user. 

For this the user informs the LLM through a chat interface of the symptoms the user experiences, after which the LLM poses follow-up questions to the user. After each message sent by the user, the symptoms are saved in a graph database (Neo4j). 

At the end a diagnosis and a recommendation is given. Both are saved in the neo4j database in the case file of the user. 

After the initial run, any following diagnosis generations also test if there exists a user in the database which has the same symptoms as the current user. If that is so, then the diagnosis is pulled from the database and given out to the user.


# How to run the app:
1. Required backend installations:

Install Node.js (version 19 at the very minimum is required)
https://nodejs.org/en/download

npm install ws 
--> Websocket für Frontend 

npm install axios
npm install neo4j-driver 
--> bib to use cypher, get connection, etc. 

neo4j server must be running locally on port 7687 
--> use docker:

# how to run docker on linux: 
docker run \
  -d \
  --name neo4j \
  -p 7474:7474 \
  -p 7687:7687 \
  -e NEO4J_AUTH=neo4j/llmproject2025 \
  neo4j

# how to run docker on windows:
  docker run ^
  --name neo4j-local ^
  -p7474:7474 -p7687:7687 ^
  -e NEO4J_AUTH=neo4j/llmproject2025 ^
  -e NEO4J_AUTH=neo4j/llmproject2025 ^
  neo4j:latest

To see the database open this URL: 
http://localhost:7474/browser/preview/
password: llmproject2025

ollama run mistral:instruct

2. Required frontend installations:
cd frontend
--> go to frontend folder
npm install
(details for the installed components are in the frontend docs)

# App Organization
It includes frontend (frontend folder), 