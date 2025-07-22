// this file reads out the csv file and gives out its result
// in terminal. that result I saved into dataset.js file

const fs = require("fs");
const { parse } = require("csv-parse");

fs.createReadStream("./Symptom2Disease_v12.csv")
  .pipe(parse({ delimiter: ";", from_line: 2 }))
  .on("data", function (row) {
    console.log(row);
  })
  .on("end", function () {
    console.log("finished");
  })
  .on("error", function (error) {
    console.log(error.message);
  });