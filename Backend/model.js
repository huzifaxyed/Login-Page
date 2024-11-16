const mongoose = require("mongoose");
exports.Users = mongoose.model("LoginUsers", {
  email: {
    type: String,
    required: true,
    minlength: 8,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});