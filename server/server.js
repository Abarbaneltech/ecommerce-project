require("dotenv").config();
// default imports
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

// config imports
const mongoConnection = require("./config/mongoose-config");

// routes imports
const productsRouter = require("./routes/product-route");
const authRouter = require("./routes/auth-route");

// mongo connection
mongoConnection();

const PORT = process.env.PORT || 8000;
const app = express();

// default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// passport middlewares
app.use(passport.initialize());
app.use(passport.session());
require("./config/auth-config")(passport);

// routes middlewares
app.use("/products", productsRouter);
app.use("/auth", authRouter);

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});

// const SneaksAPI = require("sneaks-api");
// const sneaks = new SneaksAPI();
// sneaks.getProducts("Nite Jogger", 10, function (err, products) {
//   console.log(products);
// });
