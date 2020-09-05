const mongoose = require("mongoose");

const sellersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxlength: 100,
    minlength: 4,
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
    minlength: 10,
  },
});

module.exports = mongoose.model("Sellers", sellersSchema);
