const Product = require("../models/products-model");

const getAllProducts = async () => {
  try {
    const products = await Product.find({});
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getProductByBrand = async brand => {
  const findProduct = await Product.find({ brand: brand });
  return findProduct;
};

const addProduct = async product => {
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    return newProduct;
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async id => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    return deletedProduct;
  } catch (error) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductByBrand,
};
