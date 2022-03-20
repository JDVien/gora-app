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
      content: "That's what I was thinking, not sure though",
      userId: 1,
      answerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "That's right, that is def what happens",
      userId: 2,
      answerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "Ok, yeah, in the original ending everyone died, but then Paramount changed it for theaters. Now I remember what I was thinking",
      userId: 4,
      answerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "100% agreed! RE4 was definitely very hard.",
      userId: 2,
      answerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "hard yes, but such a great game",
      userId: 4,
      answerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "yeah, for sure!",
      userId: 2,
      answerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "I feel like this would make the most sense",
      userId: 4,
      answerId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "definitely one of the main points the author was going for",
      userId: 1,
      answerId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: "yeah there isn't anyone in this story who is completely innocent",
      userId: 3,
      answerId: 40,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
