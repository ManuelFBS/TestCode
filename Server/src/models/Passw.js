const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Passw",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nick: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [4, 8],
            msg: "El nick debe ser entre 4 y 8 caracteres",
          },
        },
      },
      passw: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
