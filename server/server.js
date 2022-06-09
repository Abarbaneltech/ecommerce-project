require("dotenv").config();
// default imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const mongoConnection = require("./config/mongoose-config");
const productsRouter = require("./routes/product-route");

// mongo connection
mongoConnection();

const PORT = process.env.PORT || 8000;
const app = express();

// default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middlewares
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use("/products", productsRouter);

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
