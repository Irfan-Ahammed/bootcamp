//Read a file and log each line (Node.js - fs)

const fs = require("fs");
fs.readFile("odd-even.js", "utf8", function (err, data) {
  if (err) {
    console.log("we find a errorrrr", err);
  }
  console.log(data);
});
