const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [3, 30],
            msg: "El nombre debe contener entre 3 y 30 caracteres...",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Debe ser un Email válido...!!!",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nick: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [4, 10],
            msg: "El nick debe ser entre 4 y 10 caracteres",
          },
        },
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
