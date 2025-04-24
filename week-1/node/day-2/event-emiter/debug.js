const EvenEmitter = require("events");
const emitter = new EvenEmitter();

emitter.on("message", (data) => {
  console.log(data);
});

emitter.emit("message", { text: "user logged" });

emitter.emit("logout", "user logout");
