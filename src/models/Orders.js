const express = require("express");
const router = express.Router();

router.get("/sellers/orderProducts", (req, res) => {
  res.send("orden de compra");
});

module.exports = router;
