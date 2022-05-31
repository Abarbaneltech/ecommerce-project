const router = require("express").Router();
const {
  getAllProducts,
  addProduct,
  deleteProduct,
} = require("../controllers/product-controller");

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json(products);
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
