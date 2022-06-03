const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SneakerSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  description: String,
  image: String,
  colorway: String,
  size: Number,
  amount: Number,
});

const Sneaker = mongoose.model("Sneaker", SneakerSchema);

module.exports = Sneaker;
