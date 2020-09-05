const Users = require("../models/Users");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Users.find();
}

function getById(userId) {
  return Users.findById(userId);
}
//se crea un nuevo usuario y se condiciona con el if si este ya existe
async function create(userData) {
  const { email } = userData;
  const user = await Users.findOne({
    email,
  });
  //S
  if (!user) {
    return Users.create(userData);
  } else {
    throw Error("El email ya existe");
  }
}

async function signup(userData) {
  const { password } = userData;
  const passwordEncripted = await bcrypt.hash(password);
  return create({
    ...userData,
    password: passwordEncripted,
  });
}

async function login(email, passwordPlain) {
  const userByEmail = await Users.findOne({ email });
  if (!userByEmail) {
    throw new Error("Email not found");
  }

  const isValid = await bcrypt.compare(passwordPlain, userByEmail.password);
  if (!isValid) {
    throw new Error("Password not valid");
  }
  return jwt.sign({ id: userByEmail._id });
}

module.exports = {
  getAll,
  getById,
  create,
  signup,
  login,
};
