'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answers = sequelize.define('Answer', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      references: { model: "Users" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Answers.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};
