const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  description: String,
  image: String,
  colorway: String,
  size: Number,
  amount: Number,
});

const Product = mongoose.model("Product", sneakerSchema);

module.exports = Product;
