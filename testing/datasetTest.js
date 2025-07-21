const { extractSymptoms } = require('../llm/extractSymptoms');
// const { dataset } = require('./dataset.js')

let dataset = [[
    'test_Psoriasis_0',
    'Psoriasis',
    'I have been experiencing a skin rash on my arms, legs, and torso for the past few weeks. It is red, itchy, and covered in dry, scaly patches.'
  ]];

let symptoms = extractSymptoms(dataset[0][2]);
    // if (!Array.isArray(symptoms)){
    //     symptoms = symptoms ? [symptoms] : [];
    // };
console.log(dataset)