#!/usr/bin/node

const http = require('http');

const port = 1245;
const app = http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
