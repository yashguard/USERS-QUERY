const express = require("express");
const connect = require("./db");
const user = require("./userSchema");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  const users = await user.find();
  res.status(200).send(users);
});

server.post("/users", async (req, res) => {
  // <================== First Query ==================>
  // <================== Find all the female users ==================>
  const userList = await user.find({
    gender: "Female",
  });
  const users = await user
    .find({
      gender: "Female",
    })
    .count();
  res.status(200).send(userList);
  console.log(users);
});

server.listen(8010, () => {
  console.log("Server is running");
  connect();
});
