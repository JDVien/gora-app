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
    // associations can be defined here
  };
  return Question;
};
