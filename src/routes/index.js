const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("lading");
});

router.get("/registro", (req, res) => {
  res.send("registro");
});

module.exports = router;
