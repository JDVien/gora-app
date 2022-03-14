'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    userId: {
      references: { model: "Users" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    questionId: {
      references: { model: "Questions" },
      allowNull: false,
      type: DataTypes.INTEGER
    },

  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question, {foreignKey: "questionId"})
    Answer.belongsTo(models.User, {foreignKey: "userId"})
    Answer.hasMany(models.Comment, {foreignKey: "answerId"})
  };
  return Answer;
};
