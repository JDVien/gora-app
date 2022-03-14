'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    views: {
      type: DataTypes.INTEGER
    },
    userId: {
      references: { model: "Users"},
      allowNull: false,
      type: DataTypes.INTEGER
    },
    topicId: {
      references: { model: "Topics"},
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.Topic, {foreignKey: "topicId"})
    Question.belongsTo(models.User, {foreignKey: "userId"})
    Question.hasMany(models.Answer, {foreignKey: "questionId"})

  };
  return Question;
};
