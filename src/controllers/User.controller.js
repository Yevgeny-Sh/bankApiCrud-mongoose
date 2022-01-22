const Users = require("../models/User.model");

const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send();
  }
};
module.exports = {
  getUsers,
  // addUser,
  // deleteUser,
  // getAllUsers,
  // withdraw,
  // depositing,
  // transferring,
};
