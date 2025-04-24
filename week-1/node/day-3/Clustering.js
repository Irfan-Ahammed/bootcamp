const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  console.log(`Master running on PID ${process.pid}`);

  // Create a worker for each CPU core
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  // If a worker dies, start a new one
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Worker process code
  http
    .createServer((req, res) => {
      res.end(`Handled by worker ${process.pid}`);
    })
    .listen(3000);

  console.log(`Worker running on PID ${process.pid}`);
}
