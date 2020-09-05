const Sellers = require("../models/Sellers");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Sellers.find();
}

function getById(sellerId) {
  return Sellers.findById(sellerId);
}

function create(sellerData) {
  return Sellers.create(sellerData);
}

async function signup(sellerData) {
  const { password } = sellerData;
  const passwordEncripted = await bcrypt.hash(password);
  return Sellers.create({
    ...sellerData,
    password: passwordEncripted,
  });
}

async function login(email, passwordPlain) {
  const sellerByEmail = await Sellers.findOne({ email });
  if (!sellerByEmail) {
    throw new Error("Email not found");
  }

  const isValid = await bcrypt.compare(passwordPlain, sellerByEmail.password);
  if (!isValid) {
    throw new Error("Password not valid");
  }
  return jwt.sign({ id: sellerByEmail._id });
}

function deletee(sellerId) {
  return Sellers.findByIdAndRemove(sellerId);
}

function update(sellerId, dataUpdate) {
  return Users.findByIdAndUpdate(sellerId, dataUpdate);
}

module.exports = {
  getAll,
  getById,
  create,
  deletee,
  update,
  signup,
  login,
};
