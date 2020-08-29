const express = require("express");
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require("cors");
//iniciadores
const app = express();
const connect = require("./DataBase");

// configuraciones
app.set("port", process.env.PORT || 3000);
//middlewares
app.use(express.urlencoded({ extended: false })); //para recibir datos
app.use(methodOverride("_method")); //para poder enviar varios metodos put, delete etc..
app.use(
  session({
    secret: "secrettap",
    resave: true,
    saveUninitialized: true,
  })
); //Para guardar los datos atravez de una sesion

//variables globales

//routes
app.use(require("./routes/index"));
app.use(require("./routes/orders"));
app.use(require("./routes/users"));
app.use(require("./routes/sellers"));

// static files

//server
app.listen(app.get("port"), () => {
  console.log("Server listo", app.get("port"));
});

module.exports = app;
