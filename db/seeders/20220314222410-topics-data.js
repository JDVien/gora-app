'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Topics', [{
     name: 'Cinema',
     imgLink: "https://cdn-icons-png.flaticon.com/512/683/683103.png"
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    name: 'Literature',
    imgLink: "https://cdn-icons-png.flaticon.com/512/2178/2178213.png"
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Gaming',
    imgLink: "https://cdn-icons-png.flaticon.com/512/5532/5532803.png"
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
   return queryInterface.bulkDelete('Topics', null, {});
  }
};
