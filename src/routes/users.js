const express = require("express");
const router = express.Router();
//rutas de usuario comprador y registro

router.get("/signin", (req, res) => {
  res.send("Bienvenido");
});
router.get("/singup", (req, res) => {
  res.send("Formulario de registro");
});

module.exports = router;
