const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;


// /here what type of request is not checked
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello THARUN!\n");
  }
  else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You are logged in!\n");
  }
  else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found!\n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//use postman bro-------here 