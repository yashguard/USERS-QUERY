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
  // const userList = await user.find({
  //   gender: "Female",
  // });
  // const users = await user
  //   .find({
  //     gender: "Female",
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Second Query ==================>
  // <================== Find all the female users who speak one of the two languages Kannada, Hindi ==================>
  // const userList = await user.find({
  //   gender: "Female",
  //   $or: [{ language: "Kannada" }, { language: "Hindi" }],
  //   ================ or ========================
  //   language: {$in: ["Kannada", "Hindi"]}
  // });
  // const users = await user
  //   .find({
  //     gender: "Female",
  //     $or: [{ language: "Kannada" }, { language: "Hindi" }],
  //     ================ or ========================
  //     language: {$in: ["Kannada", "Hindi"]}
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Third Query ==================>
  // <================== Find all the male users who can speak Hindi and female users who can speak Kannada ==================>
  // const userList = await user.find({
  //   $or: [
  //     { gender: "Male", language: "Hindi" },
  //     { gender: "Female", language: "Kannada" },
  //   ],
  // });
  // const users = await user
  //   .find({
  //     $or: [
  //       { gender: "Male", language: "Hindi" },
  //       { gender: "Female", language: "Kannada" },
  //     ],
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Fourth Query ==================>
  // <================== Find all the users who wear the shirt size S ==================>
  // const userList = await user.find({
  //   shirt_size: "S",
  // });
  // const users = await user
  //   .find({
  //     shirt_size: "S",
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Fifth Query ==================>
  // <================== Find all the female users who wear the shirt size XL ==================>
  // const userList = await user.find({
  //   gender: "Female",
  //   shirt_size: "XL",
  // });
  // const users = await user
  //   .find({
  //     gender: "Female",
  //     shirt_size: "XL",
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Sixth Query ==================>
  // <================== Find all the English speaking male users and Hindi speaking female users ==================>
  // const userList = await user.find({
  //   $or: [
  //     { gender: "Male", language: "English" },
  //     { gender: "Female", language: "Hindi" },
  //   ],
  // });
  // const users = await user
  //   .find({
  //     $or: [
  //       { gender: "Male", language: "English" },
  //       { gender: "Female", language: "Hindi" },
  //     ],
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Seventh Query ==================>
  // <================== Find all the male users who can speak Hindi or English and female users who can speak Kannada or German ==================>
  // const userList = await user.find({
  //   $or: [
  //     { gender: "Male", language: { $in: ["English", "Hindi"] } },
  //     { gender: "Female", language: { $in: ["Kannada, German"] } },
  //   ],
  // });
  // const users = await user
  //   .find({
  //     $or: [
  //       { gender: "Male", language: "English" },
  //       { gender: "Female", language: "Hindi" },
  //     ],
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Eighth Query ==================>
  // <================== Find all the female users who can speak Bengali who wear shirt size XL and male users who speak German and wear shirt size either L or M ==================>
  // const userList = await user.find({
  //   $or: [
  //     { gender: "Female", language: "Bengali", shirt_size: "XL" },
  //     { gender: "Male", language: "German", shirt_size: { $in: ["M", "L"] } },
  //   ],
  // });
  // const users = await user
  //   .find({
  //     $or: [
  //       { gender: "Female", language: "Bengali", shirt_size: "XL" },
  //       { gender: "Male", language: "German", shirt_size: { $in: ["M", "L"] } },
  //     ],
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Ninth Query ==================>
  // <================== Find all the female users who speak any of the Indian languages (Hindi, Punjabi, Bengali, Gujarati, Tamil, Malayalam) ==================>
  // const userList = await user.find({
  //   gender: "Female",
  //   language: {
  //     $in: ["Hindi", "Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam"],
  //   },
  // });
  // const users = await user
  //   .find({
  //     gender: "Female",
  //     language: {
  //       $in: ["Hindi", "Punjabi", "Bengali", "Gujarati", "Tamil", "Malayalam"],
  //     },
  //   })
  //   .count();
  // res.status(200).send(userList);
  // console.log(users);
  // <================== Tenth Query ==================>
  // <================== Men who can speak Korean ==================>
  const userList = await user.find({
    gender: "Male",
    language: "Korean",
  });
  const users = await user
    .find({
      gender: "Male",
      language: "Korean",
    })
    .count();
  res.status(200).send(userList);
  console.log(users);
});

server.listen(8010, () => {
  console.log("Server is running");
  connect();
});
