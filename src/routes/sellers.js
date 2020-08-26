const express = require("express");
const router = express.Router();
// rutas de usuario Vendedor

router.get("/sellers/signinSeller", (req, res) => {
  res.send("Bienvenido");
});
router.post("/sellers/newSeller", (req, res) => {
  console.log(req.body);
  res.send("nuevo vendedor");
});
router.get("/sellers/singupSeller", (req, res) => {
  res.send("Formulario de registro Vendedor");
});

router.post("/sellers/postProducts", (req, res) => {
  const { name, category, quantity, description, price, image } = req.body;
  const errors = [];
  if (!name) {
    errors.push({ text: "Por favor ingresa el nombre del producto" });
  }
  if (!category) {
    errors.push({ text: "Campo obligatorio" });
  }
  if (!quantity) {
    errors.push({ text: "Campo obligatorio" });
  }
  if (!description) {
    errors.push({ text: "Por favor agrega una descripción" });
  }
  if (!price) {
    errors.push({ text: "Agrega el precio en moneda nacional" });
  }
  if (!image) {
    errors.push({ text: "Foto del producto" });
  }
  if (errors.length > 0) {
    res.render("", {
      errors,
      name,
      category,
      quantity,
      description,
      price,
      image,
    });
  } else {
    res.send("Ha sido validado");
  }
  res.send("ok");
});

module.exports = router;
