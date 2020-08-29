const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");
const Users = require("../models/User");

function getAll() {
  return Users.find();
}

function getById(UsersId) {
  return Users.findById(UsersId);
}

function create(UserData) {
  return Users.create(UserData);
}

async function signup(UserData) {
  const { password } = UserData;
  const passwordEncripted = await bcrypt.hash(password);
  return User.create({
    ...UserData,
    password: passwordEncripted,
  });
}

async function login(email, passwordPlain) {
  const UserByEmail = await User.findOne({ email });
  if (!UserByEmail) {
    throw new Error("Tu e-mail es incorrecto");
  }

  const isValid = await bcrypt.compare(passwordPlain, UserByEmail.password);
  if (!isValid) {
    throw new Error("Contraseña incorrecta");
  }
  return jwt.sign({ id: UserByEmail._id });
}

function deletee(UserId) {
  return Users.findByIdAndRemove(UserId);
}

function update(UserId, dataUpdate) {
  return Users.findByIdAndUpdate(UserId, dataUpdate);
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
