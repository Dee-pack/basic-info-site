const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Internal server error");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});