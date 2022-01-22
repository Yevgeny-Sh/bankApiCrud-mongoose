//userRoute

const express = require("express");
const User = require("../models/User.model");
const Users = require("../models/User.model");
const router = express.Router();
const { getUsers } = require("../controllers/user.Controller");
//get all users
router.get("/api/users", getUsers);

router.post("/api/users", async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("*", (req, res) => {
  res.sendFile(path.resolve(publicPath, "index.html"));
});

module.exports = router;
