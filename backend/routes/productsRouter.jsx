const express = require("express");
const productsRouter = express.Router();
const { auth } = require("../middleware/authAdmin.jsx");
const { productController } = require("../controllers/productController.jsx")

//routers
productsRouter.route("/product").get(productController.getProducts).post(auth, productController.addProducts);
productsRouter.route("/product/:id").patch(productController.updateProduct).delete(productController.deleteProduct);
module.exports = productsRouter;
