# How does the app work? 
This program allows a user to converse with Ollama Mistral Instruct LLM in order to find out what medical diagnosis applies to the user. 

For this the user informs the LLM through a chat interface of the symptoms the user experiences, after which the LLM poses follow-up questions to the user. After each message sent by the user, the symptoms are saved in a graph database (Neo4j). 

At the end a diagnosis and a recommendation is given. Both are saved in the neo4j database in the case file of the user. 

After the initial run, any following diagnosis generation also tests if there exists a user in the database which has the same symptoms as the current user. If that is so, then the diagnosis is pulled from the database and given out to the user. 

There is a separate module for testing which includes a dataset with 1011 data points. It shows how the program performs when compared to that dataset.


# Required installations for the app:
1. Local LLM (Ollama) Installation:

Install Ollama 
https://ollama.com/download 

Pull the required model.<br>
This project uses the mistral:instruct model: 
ollama pull mistral:instruct

Start the Ollama server<br>
If it doesn't start automatically, run: ollama serve

Check availability: Model should be avalaible at default endpoint: http://localhost:11434 

2. Backend installations:

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

3. Required frontend installations:
cd frontend
--> go to 'frontend' folder
npm install
(details for the installed components are in the frontend docs)

# How to run the app?
1. Activate the backend by going to the 'backend' folder and starting the server:
cd backend
node server

2. Activate the frontend by going to 'frontend' folder and starting the interface:
cd frontend
npm run dev

User this URL to access the app:
http://localhost:8501/

Notes:
While the program is running, you can see in the backend terminal what symptoms are getting saved and at the end also how many nodes and relationships were saved in the database.


# How to run testing?
1. Go into the 'testing' folder and run the testing node:
cd testing
node datasetTest


# In-Detail Documentations
More in-detail documentations can be found in the 'docs' folder. 
