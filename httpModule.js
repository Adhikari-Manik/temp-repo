const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("This is our about page");
  }
  res.end(`<h1>Opps We couldn't find this page</h1>
  <a href = "/"> Home page</a>
  
  `);
});

server.listen(5000);
