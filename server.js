const PORT = 3333;
const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

require("./events")(io);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

module.exports = app;
