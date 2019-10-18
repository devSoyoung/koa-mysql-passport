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
    studentId: {
      type: DataTypes.STRING(10),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    authenticated: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: true,
    }
  })
);