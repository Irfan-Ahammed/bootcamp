//pine undengil readableSream & writableStreamum onnm avisyamilla pipe undel
var fs = require("fs");

var readableSream = fs.createReadStream(__dirname + "/input.txt", {
  encoding: "utf8"
});
var writableStream = fs.createWriteStream(__dirname + "/write.txt", {
  encoding: "utf8"
});
readableSream.pipe(writableStream);
