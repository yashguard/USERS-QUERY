const express = require("express");
const connect = require("./db");
const user = require("./userSchema");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  const users = await user.find();
  res.status(200).send(users);
});

server.listen(8020, () => {
  console.log("Server is running");
  connect();
});
