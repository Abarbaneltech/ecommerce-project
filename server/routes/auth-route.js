const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/users-model");
const registerUser = require("../controllers/auth-controller");

router.post("/register", async (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.json({ message: "User already exists" });
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = await registerUser({
        full_name: req.body.full_name,
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      });
      res.status(201).json({ message: "New user registered", newUser });
    }
  });
});

module.exports = router;
