'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Questions', [
    {
      title: 'How does the first Paranormal Activity end?',
      content: 'I am having trouble remembering how it ended and if anyone knows from the top of their head please answer',
      userId: '1',
      topicId: '1',
      imgLink: "https://www.gannett-cdn.com/-mm-/989a8e9fe8647fed5ef319e72c111e9fcebca71c/c=0-16-2178-1247/local/-/media/2015/10/17/USATODAY/USATODAY/635807069453190737-ParaAct2-Still-PK-001-1-.jpg?width=660&height=374&fit=crop&format=pjpg&auto=webp",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "What is the hardest Resident Evil game?",
      content: "Personally for me, I really liked Resident Evil 2 and how it challenged me without feeling too grindy on every level. It was just so well balanced overall and goes very well with the overall theme.",
      userId: '3',
      topicId: '3',
      imgLink: "https://cdn.shopify.com/s/files/1/1878/3879/products/N4905.jpg?v=1557317755",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title:  "Where did Danny get his powers in The Shining?",
      content: "In Stephen King’s The Shining, Danny Torrance’s power of the “shining” is a key part of the story, but how did he come to possess this ability? Was it something he was born with or did he obtain them at some point before the story? ",
      userId: '4',
      topicId: '2',
      imgLink: "https://filmandfurniture.com/wp-content/uploads/2017/11/danny-tricycle-the-shining-carpet-kubrick.png",
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
   return queryInterface.bulkDelete('Questions', null, {});
  }
};
