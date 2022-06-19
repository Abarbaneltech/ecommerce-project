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
    if (!user) return res.json({ message: "Wrong Information" });
    if (info) return res.json({ info, isAuth: false });
    else {
      req.logIn(user, err => {
        if (err) throw err;
        console.log(req.user);
        return res.json({
          isAuth: true,
          user: req.user,
          isOnUserId: req.user._id,
        });
      });
    }
  })(req, res, next);
});

// router.post("/logout", async (req, res, next) => {
//   // req.session.destroy(args => {
//   req.logout(function (err) {
//     // if (err) return next(err);
//     res.redirect("/");
//     res.json({ isAuth: false });
//   });
//   // });
// });

router.post("/logout", (req, res, next) => {
  console.log("logout:", req.user);
  req.logout(err => {
    if (err) {
      return next(err);
    }
    req.session.destroy(err => {
      res.clearCookie("connect.sid", { path: "/" });
      res.json({ isAuth: false });
    });
  });
});

router.get("/check-auth", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ isAuth: true, user: req.user });
  } else {
    res.json({ isAuth: false });
  }
});

module.exports = router;
