'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
      content: `Hey you don't have to be mean about it, not everyone has 2 hours to watch a movie they have watched`,
      userId: 2,
      answerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 2,
      answerId: 2,
      content: "100% agreed! RE4 was definitely very hard.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "Pretty sure someone survived at the end of this movie.",
      userId: 4,
      answerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "first!",
      userId: 2,
      answerId: 3,
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
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
