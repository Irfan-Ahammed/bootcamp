var fs = require("fs");

var readableSream = fs.createReadStream(__dirname + "/input.txt", {
  encoding: "utf8"
});
var writableStream = fs.createWriteStream(__dirname + "/write.txt", {
  encoding: "utf8"
});
readableSream.on("data", (chunksData) => {
//   console.log("chunks data*********", chunksData);
  writableStream.write(chunksData);
});

readableSream.on("error", (err) => {
  console.log("an error happend pleae chck  " + err);
});

readableSream.on("end", () => {
  console.log("finally it ended....");
});
