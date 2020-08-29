const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  Date: {
    timestamps: true,
  },
});

module.exports = mongoose.model("postProduct", productSchema);
