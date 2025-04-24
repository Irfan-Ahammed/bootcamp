// Create a basic route handler without Express (Node.js)

const http = require("http");
// const path = require("path");

const PORT = 4000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h3>welcome home</h3>");
    res.end();
  } else if (req.url == "/service") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>service available</h1>");
    res.end();r
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about</h1>");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("404 : page not fount");
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`server is running in ${PORT}`);
});
