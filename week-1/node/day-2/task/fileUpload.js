const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(` 
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="file">
        <button type="submit">Upload</button>
    </form>`);
  }
  if (req.method === "POST") {
    const filePath = path.join(__dirname, "upload", "uploaded_file");
    if (!fs.existsSync("upload")) {
      fs.mkdirSync("upload");
    }
    const writeStream = fs.createWriteStream(filePath);
    req.pipe(writeStream);

    req.on("end", () => {
      res.writeHead(200, { "content-type": "text/plain" });
      res.end("File uploaded successfully");
    });
    req.on("error", () => {
      res.writeHead(500);
      res.end("upload failed..");
    });
  }
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
