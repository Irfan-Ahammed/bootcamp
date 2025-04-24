// Create and Emit a Custom Event (Node.js Events)

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('launch', (message) => {
  console.log(`🚀 Event triggered: ${message}`);
});

myEmitter.emit('launch', 'Your backend career is taking off!');

// var fs = require("fs");
// fs.writeFile("demofile.txt", "hey buddy how are you?..", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file created");
// });
// var rs = fs.createReadStream("./demofile.txt");
// rs.on("open", function () {
//   console.log("The file is open");
// });
