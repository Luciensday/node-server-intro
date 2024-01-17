// const message = require("./message.js");

// console.log(message.message1);
// console.log(message.message2);

const server = require("./server.js");

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
