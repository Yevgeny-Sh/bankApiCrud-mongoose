const mongoose = require("mongoose");
//const validator = require("validator");

const User = mongoose.model("User", {
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  cash: {
    type: Number,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = User;
