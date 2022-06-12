const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  full_name: { type: String, required: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  admin: { type: Boolean, default: false },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
