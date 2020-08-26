const mongoose = require("mongoose");
//modelo de Vendedor para registro
const SellerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: /^.+@.+\..+$/,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  adress: {
    type: String,
    required: true,
  },
  Date: {
    timestamps: true,
  },
});

module.exports = mongoose.model("Seller", SellerSchema);
