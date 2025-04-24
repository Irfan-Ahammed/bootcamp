var fs = require("fs");
fs.readFile("cal.js", "utf8", function (err, data) {
  console.log(data);
});
// console.log(fs);
