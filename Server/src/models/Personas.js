const { DataTypes, DATE } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Personas",
    {
      id_personas: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      tipo_persona: {
        type: DataTypes.ENUM("Natural", "Jurídica"),
        allowNull: false,
      },
      tipo_documento: {
        type: DataTypes.ENUM("CC", "CE", "PA", "NIT"),
        allowNull: false,
      },
      num_documento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nombres: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      apellidos: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      direccion: {
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
