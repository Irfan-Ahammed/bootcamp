// ✅ Clean Version (No Express, No Dotenv, Just Pure Node.js)

const http = require('http');
const url = require('url');

// Heavy task simulation
const performHeavyTask = () => {
    let heavyTaskCount = 1;
    for (let i = 0; i < 1_000_000; i++) {
        heavyTaskCount += Math.sqrt(heavyTaskCount * 3);
    }
    return heavyTaskCount;
};

// Create HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/heavy' && req.method === 'GET') {
        console.profile('Heavy Task');
        const heavyTaskCount = performHeavyTask();
        console.profileEnd('Heavy Task');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: "ok", heavyTaskCount }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const PORT = 4001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
