const express = require("express");
const ordersRouter = express.Router();
const { orderController } = require("../controllers/ordersControllers.jsx")

//routers
ordersRouter.route("/order").get(orderController.getOrders);
ordersRouter.route("/order/:id").get(orderController.getOrder).patch(orderController.updateOrder);
module.exports = ordersRouter;
