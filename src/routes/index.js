const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("lading");
});

router.get("/registroUser", (req, res) => {
  res.send("registro");
});

router.get("/registroSeller", (req, res) => {
  res.send("registro");
});

module.exports = router;
