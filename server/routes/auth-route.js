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
      res
        .status(201)
        .json({ message: "New user registered", isAuth: true, user: newUser });
    }
  });
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.json({ message: "Wrong Information" });
    else {
      req.logIn(user, err => {
        if (err) throw err;
        // console.log(req.user);
        res.json({ isAuth: true, user: req.user, isOnUserId: req.user._id });
      });
    }
  })(req, res, next);
});

router.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    console.log(req.user);
  } else {
    res.json({ isAuth: false });
  }
});

module.exports = router;
