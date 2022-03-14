'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    imgLink: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};
