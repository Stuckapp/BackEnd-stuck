const jwt = require("../lib/jwt");
const User = require("../models/Users");
const { response } = require("express");

async function auth(req, response, next) {
  try {
    const { authorization } = req.headers;
    console.log("auth:", authorization);
    const decodedToken = jwt.verify(authorization);
    console.log("decoded token:", decodedToken);
    const user = await User.findById(decodedToken.id);
    req.user = user;
    next();
  } catch (error) {
    response.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = auth;
