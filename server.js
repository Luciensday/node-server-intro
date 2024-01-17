const express = require("express");
const server = express();

server.get("/", (request, response) => {
  const year = new Date().getFullYear();
  response.send(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>Home</title>
    </head>
    <body>
      <h1>Hello, it's ${year}</h1>
    </body>
  </html>
  `);
});

server.get("/un-oh", (request, response) => {
  response.status(500);
  response.send("something went wrong");
});

module.exports = server;

server.get("/search", (request, response) => {
  const keyword = request.query.keyword;
  response.send(`<p>You searched for ${keyword}</p>`);
});

server.get("/users/:name", (request, response) => {
  const name = request.params.name;
  response.send(`<h1>Hello ${name}</h1>`);
});
