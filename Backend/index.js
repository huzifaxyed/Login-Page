const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { Users } = require("./model");
const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://SYEDHUZAIFA:80YeoKiNdbU7ZoDz@mongodb-tutorial.ut6of.mongodb.net/myDBss"
  );
  console.log("mongo connected" + mongoose.connection.host);
};
connectDB();

app.use(express.json());
app.get("/get", async (req, res) => {
  let doc = await Users.find();
  res.json(doc);
});

//Email aur password nikala gya h
//Agar email aur password exist nhi karta toh status 404 aur msg send kr
app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email && !password) {
    return res.status(404).send("email and password are required");
  }
  {
    let user = await Users.findOne({ email, password });
    console.log(user);
    if (!user) {
      res.status(404).send("user not found!");
    } else {
      res.json(user);
    }
  }
});
app.post("/create/user", async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      if (req.body.email.length < 6 || req.body.password.length < 8) {
        throw new Error("bad request");
      }
    } else {
      let salt = await bcrypt.genSalt(10);
      let email = req.body.email;
      let password = await bcrypt.hash(req.body.password, salt);
      const user = new Users();
      user.email = email;
      user.password = password;
      const doc = await user.save();
      res.json(doc);
    }
  } catch {
    res.send("bad request");
  }
});
app.listen("1000", (req, res) => {
  console.log("server is running");
});
