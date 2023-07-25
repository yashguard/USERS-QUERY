const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
  shirt_size: String,
  language: String,
});

const user = mongoose.model("user", userSchema);

module.exports = user;