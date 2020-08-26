const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
//iniciadores
const app = express();
const connect = require("./DataBase");

// configuraciones
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secrettap",
    resave: true,
    saveUninitialized: true,
  })
);
//variables globales

//routes
app.use(require("./routes/index"));
app.use(require("./routes/orders"));
app.use(require("./routes/users"));
app.use(require("./routes/sellers"));
// static files

//server
connect
  .connect()
  .then((db) => {
    console.log("DB is connected");
    app.listen(app.get("port"), () => {
      console.log("Server on port", app.get("port"));
    });
  })
  .catch((err) => console.error(err));

module.exports = app;
