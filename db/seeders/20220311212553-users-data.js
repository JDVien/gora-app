'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [{
     firstName: 'Damian',
     lastName: 'Rojas',
     email: 'damian@gmail.com',
     username: 'damianrojas',
     hashedPassword: '$2a$10$wgU73qNEPAxDkiULOxwBIujTc7cJh./hNG6jMFgP7jv7nENdhnkJ2',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    firstName: 'Jason',
    lastName: 'Vien',
    email: 'jdvn2517@gmail.com',
    username: 'vienjason',
    hashedPassword: '$2a$10$F/7Pbcs/5ZUljGTEaM4/Y.86K1BDuStiCYbUNbT9KkIjI9HHvGTHS',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      firstName: 'Suwanshree',
      lastName: 'Acharya',
      email:'suwan@gmail.com',
      username: 'suwan',
      hashedPassword:'$2a$10$Spu4JC1CWoMLSdHuRcb/IeBXYZsjim45ATuqwbtCMGigT3reqbQS6',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
    firstName: 'Nate',
    lastName: 'Zavala',
    email: 'zavalanathana@gmail.com',
    username: 'nate',
    hashedPassword: '$2a$10$zNhE/0zccjCJIbIahYF7AeLl0O.yIVKxHlwaMDpyjpdC6jdZ2C5Aa',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
