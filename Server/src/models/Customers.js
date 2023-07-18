const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Customers",
    {
      idPerson: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      typePeople: {
        type: DataTypes.ENUM("Natural", "Jurídica"),
        allowNull: false,
      },
      type_document: {
        type: DataTypes.ENUM("CC", "CE", "PA", "NIT"),
        allowNull: false,
      },
      idDocument: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      names: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      surnames: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
