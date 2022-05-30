const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_CONNECTION;

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");

  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
