const fs = require("fs");
const sn = require("sillyname");

const http = require("http");

fs.writeFile("example.txt", "hello tharun from nodejs!", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("the data entered!! scuccessfully!!");
  }
});

console.log(`name is ${sn()}`);

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello THARUN!\n");
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You are logged in!\n");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found!\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
