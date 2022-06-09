const User = require("../models/users-model");

const registerUser = async userData => {
  const registerUser = new User(userData);

  try {
    await registerUser.save();
    return registerUser;
  } catch (error) {
    console.log(error);
  }
};

module.exports = registerUser;
