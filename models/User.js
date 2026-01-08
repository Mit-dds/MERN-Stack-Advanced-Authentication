const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide a username"],
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: 6,
    select: false,
  },
  resetpasswordToken: String,
  resetpasswordExpire: Date,
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  // const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
