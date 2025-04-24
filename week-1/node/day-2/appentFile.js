const fs = require("fs");

fs.appendFile("cal.js", "console.log('done');", (err) => {
  console.log("data saved");
});
