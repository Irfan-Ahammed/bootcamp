const EvenEmitter = require("events");
const emitter = new EvenEmitter();
//define event
emitter.on("hay", (a,b) => {
    let result=a+b;
  console.log(`result is ${result}`);
});

emitter.emit("hay",1,2);

