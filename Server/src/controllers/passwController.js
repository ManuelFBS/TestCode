const { response } = require("express");
const { User, Passw } = require("../db");
const bcryptjs = require("bcrypt");

const createPasswDb = async (nick, passw) => {
  let passwordHash = await bcryptjs.hash(passw, 10);

  passw = passwordHash;

  const newPasswUser = await Passw.create({ nick, passw });

  return newPasswUser;
};

// Validación del Usuario...
const validateUser = async (nick, passw) => {
  const auth = await Passw.findOne({ where: { nick } });

  if (!auth) {
    throw Error("Usuario no existe...!!!");
  }

  const validPassword = await bcryptjs.compare(passw, auth.passw);

  if (!validPassword) {
    throw Error("Password incorrecto...!!!");
  }

  return "User validated...!!!";
};

module.exports = {
  createPasswDb,
  validateUser,
};
