const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url);
    let file;
    if (req.url === "/") {
        file = "index.html";
    } else if (req.url === "/about") {
        file = "about.html";
    } else if (req.url === "/contact-me") {
        file = "contact-me.html";
    } else {
        file = "404.html";
    }
    fs.readFile(file, (err, data) => {
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