const express = require("express");
const mongoose = require("mongoose");
const mongoConnection = require("./config/mongoose-config");
require("dotenv").config();

mongoConnection();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
