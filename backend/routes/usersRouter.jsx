const express = require("express");
const usersRouter = express.Router();
const { usersController } = require('../controllers/usersControllers.jsx')

usersRouter.post("/login", usersController.login);
usersRouter.route("/users").get(usersController.getUsers);
usersRouter.get("/refresh_token", usersController.refreshToken);
usersRouter.route("/users/:id").delete(usersController.deleteUser).patch(usersController.addAdmin);
module.exports = usersRouter;
