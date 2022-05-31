// default imports
const express = require("express");
const mongoose = require("mongoose");
const mongoConnection = require("./config/mongoose-config");
const productsRouter = require("./routes/product-route");
require("dotenv").config();

// mongo connection
mongoConnection();

const PORT = process.env.PORT || 8000;
const app = express();

// default middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes middlewares
app.use("/products", productsRouter);

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
