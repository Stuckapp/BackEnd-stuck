const express = require("express");
const UserRouter = require("./routes/usersRoutes");
const SellerRouter = require("./routes/sellersRoutes");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  console.log("middleware listo");
  next();
});

app.use("/Users", UserRouter);
app.use("/Sellers", SellerRouter);
app.use("/auth", authRouter);

module.exports = app;
