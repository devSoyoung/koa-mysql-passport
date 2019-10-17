module.exports = (sequelize, DataTypes) => (
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
);