/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const {
  courses,
  authors
} = mockData;

const data = JSON.stringify({
  courses,
  authors
});
const filepath = path.join(__dirname, "db.json");
//const filepath = "tools/db.json";

//console.log("Creando: ", filepath);
fs.writeFile(filepath, data, function (err) {
  //console.log("cargado al archivo: ", data);
  err ? console.log(err) : console.log("Mock DB created.");
});