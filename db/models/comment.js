'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answerId: {
      references: { model: "Answers" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
    userId: {
      references: { model: "Users" },
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Answer, {foreignKey: "answerId"})
    Comment.belongsTo(models.User, {foreignKey: "userId"})
  };
  return Comment;
};
