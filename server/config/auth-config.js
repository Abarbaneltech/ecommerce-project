const User = require("../models/users-model");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      User.findOne({ username: username }, (err, user, info) => {
        if (err) throw err;
        if (!user) return done(null, false, { message: "Wrong username" });
        if (info) return res.json({ info, isAuth: false });
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Wrong password" });
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    return cb(null, user.id);
  });

  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      return cb(err, user);
    });
  });
};
