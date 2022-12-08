const express = require("express");
const imgRouter = express.Router();
const { imgController } = require("../controllers/imageControllers.jsx")

imgRouter.route("/img").post(imgController.uploadImg);
imgRouter.route("/img/:id").delete(imgController.deleteImg);
module.exports = imgRouter;
