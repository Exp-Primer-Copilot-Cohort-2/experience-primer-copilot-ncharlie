// Create web server
// Create a server that listens on port 3000, and returns "Hello, World!" when it receives a request.
// The response should be sent with a status code of 200.

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello, World!');
});

server.listen(3000);
console.log('Server listening on port 3000');