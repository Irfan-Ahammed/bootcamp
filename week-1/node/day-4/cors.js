// --CORS--
//application protect cheyyanulla (browserilum /application serverilokkeyulla) policy
//origin-> aaraan ee request vilichad (api vilichad)

const http = require("http");

const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*"); // or 'http://localhost:3000'
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "CORS enabled!" }));
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
