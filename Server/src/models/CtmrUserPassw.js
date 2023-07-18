const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("CtmrUserPassw", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  });
};
