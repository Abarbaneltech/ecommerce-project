const router = require("express").Router();
const mongoose = require("mongoose");

const {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductByBrand,
} = require("../controllers/product-controller");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json(products);
});

router.post(`/search`, async (req, res) => {
  const products = await getProductByBrand(req.body.brand);
  console.log(products);
  res.status(200).json({ message: `${req.body.brand}`, products });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const product = await addProduct(req.body);
  res.status(201).json({ message: "product was added successfully", product });
});

router.delete("/:id", async (req, res) => {
  const deletedProduct = await deleteProduct(req.params.id);
  res.status(200).json(`Delete product: ${deletedProduct}`);
});

module.exports = router;
