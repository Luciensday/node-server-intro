const test = require("node:test");
const assert = require("node:assert");
const server = require("../server.js");

test("home route returns expected page", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876");
  app.close();

  assert.equal(response.status, 200);
  const body = await response.text();
  assert.match(body, /Hello/);
});

test("something went wrong", async () => {
  const app = server.listen(9876);
  const response = await fetch("http://localhost:9876/un-oh");
  app.close();

  assert.equal(response.status, 500);
  const body = await response.text();
  assert.equal(body, "something went wrong");
});
