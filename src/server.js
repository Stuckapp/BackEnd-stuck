const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");

const app = express();
//settings
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
// Routes

app.use("/", require("./routes/index"));

// servidor
app.listen(app.get("port"), () => {
  console.log("server ready", app.get("port"));
});
