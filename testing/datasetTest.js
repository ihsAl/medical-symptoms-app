import Papa from 'papaparse';

Papa.parse(file, config);
    
const csv = Papa.unparse(data[, config]);



var csv = require('./Symptom2Disease_first50'); // test csv file


var options={'separator' : ';'}; // change standard separator in csv to ;
var testDataArrays = $.csv.toArrays(csv, options);


(console.log(testDataArrays);