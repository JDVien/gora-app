'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Answers', [
    {
      content: "I have no idea, try rewatching",
      userId: 4,
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "I think the fourth installment was definitely harder as newer mechanics were introduced in the game.",
      userId: 4,
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "It was the fourth one for me.",
      userId: 1,
      questionId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "It is not explicitly said how Danny got his powers, but it can be inferred that it may have come to him as result of his tumultuous childhood.",
      userId: 1,
      questionId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      content: "They all died",
      questionId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }


   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Answers', null, {});
  }
};
