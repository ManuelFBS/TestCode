const { Sequelize } = require("sequelize");
require("dotenv").config();
const UserModel = require("./models/User");
const PasswModel = require("./models/Passw");

const { DB_DIALECT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

UserModel(sequelize);
PasswModel(sequelize);

const { User, Passw } = sequelize.models;
//
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
