'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    email:{
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: "userId"})
    User.hasMany(models.Answer, {foreignKey: "userId"})
    User.hasMany(models.Comment, {foreignKey: "userId"})
  };
  return User;
};
