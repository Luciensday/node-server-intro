const express = require("express");
const server = express();

server.get("/", (request, response) => {
  response.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home</title>
    </head>
    <body>
      <h1>Hello</h1>
    </body>
  </html>
  `);
});

server.get("/un-oh", (request, response) => {
  response.status(500);
  response.send("something went wrong");
});

module.exports = server;
