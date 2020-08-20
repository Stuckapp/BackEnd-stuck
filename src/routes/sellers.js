const express = require("express");
const router = express.Router();
// rutas de usuario Vendedor

router.get("/signinSeller", (req, res) => {
  res.send("Bienvenido");
});
router.get("/singupSeller", (req, res) => {
  res.send("Formulario de registro Vendedor");
});
module.exports = router;
