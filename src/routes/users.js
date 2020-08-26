const express = require("express");
const router = express.Router();
//rutas de usuario comprador y registro

router.get("/users/signinSeller", (req, res) => {
  res.send("Bienvenido");
});
router.get("/users/singupSeller", (req, res) => {
  res.send("Formulario de registro");
});

router.get("/users/purchase", (req, res) => {
  res.send("Pago");
});

module.exports = router;
