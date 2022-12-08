const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { connect, connection } = require("mongoose");
const imgRouter = require("./routes/imageRouter.jsx");
const usersRouter = require("./routes/usersRouter.jsx");
const ordersRoutes = require("./routes/ordersRouter.jsx");
const addressRouter = require("./routes/addressRouter.jsx");
const productsRouter = require("./routes/productsRouter.jsx");

//appiin tohirgoog shalgah process.env
dotenv.config();

//router
const app = express();
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use(fileUpload({ useTempFiles: true }));
app.use("/api", imgRouter);
app.use("/api", usersRouter);
app.use("/api", ordersRoutes);
app.use("/api", productsRouter);
app.use("/api", addressRouter);

//mongodb holboh
connection.once("open", () => {
  console.log("mongodb database connected");
});
connection.on("disconnected", () => {
  console.log("mongodb database disconnected...");
});
connection.on("error", (e) => {
  console.log(`error ${e}`);
});
process.on("SIGINT", () => {
  connection.close(() => {
    console.log("database terminated");
    process.exit(0);
  });
});

connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, console.log(`Express server ${process.env.PORT}`));
});
