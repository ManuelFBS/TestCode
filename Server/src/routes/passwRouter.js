const { Router } = require("express");
const {
  postUserPasswHandler,
  validateUserPassword,
} = require("../handlers/passwHandler");

const passwRouter = Router();

passwRouter.post("/", postUserPasswHandler);
//
passwRouter.get("/validate", validateUserPassword);

module.exports = passwRouter;
