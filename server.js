const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getsecret") {
    res.end("Hello Secret!");
  }
});

server.listen(4111);
