const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const rUrl = url.parse(req.url).pathname;

  if (rUrl === "/") {
    res.write("<h1>Hello from server</h1>");
    res.end();
  } else if (rUrl === "/home") {
    res.write("<h1>Home page</h1>");
    res.end();
  } else if (rUrl === "/about") {
    res.writeHead(201, { "Content-Type": "text/html" });
    res.write("<h1>About page</h1>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page not found</h1>");
    res.end();
  }
});

server.listen(8081, () => {
  console.log("Server started on port 8081");
});
