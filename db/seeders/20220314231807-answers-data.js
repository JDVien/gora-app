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
        content: "Doesn't everyone die in the end?",
        userId: 4,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Pretty sure someone survives, but I have no idea. Watch it again, maybe, it's a classic now.",
        userId: 2,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "There a few alternate endings. In the theatrical one, a possessed Katie appears to survive but is said to have gone missing.",
        userId: 3,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I think the fourth installment was definitely harder as newer mechanics were introduced in the game.",
        userId: 2,
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
        content: "They are all fairly challenging in different ways!",
        userId: 4,
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "It is not explicitly said how Danny got his powers, but it can be inferred that it may have come to him as result of his tumultuous childhood.",
        userId: 3,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Maybe it's because his father was abusive, and he developed it as a defense.",
        userId: 1,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "If I remember correctly, it is something you are born with.",
        userId: 2,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The jawbreaker in the image is so iconic, it's hard to beat.",
        userId: 2,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "There was one with a pit full of needles that someone falls into. That one always got me.",
        userId: 3,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The first one where the guy realizes he has to cut off his own foot. That is such a crazy idea.",
        userId: 4,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "This one perfected it to me. The storytelling and world-building are second to none.",
        userId: 4,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The addition of sprinting zombies took it up a notch, for sure.",
        userId: 3,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "You can't beat Night of the Living Dead. It's the OG.",
        userId: 1,
        questionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I don't feel like horror comedies hold up well over time.",
        userId: 1,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Love Shaun of the Dead! Give Cabin in the Woods a try!",
        userId: 2,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "How about American Psycho or Scream? Not full-on comedies, but they definitely have funny moments.",
        userId: 4,
        questionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Suspiria is only good for it's cinematography. Phenomena is where it's at!",
        userId: 3,
        questionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Inferno is the best, IMO.",
        userId: 2,
        questionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Trauma!",
        userId: 1,
        questionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Maybe arbitrary, but so iconic!",
        userId: 4,
        questionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "He wanted to really torture his victims. The gloves are perfect!",
        userId: 3,
        questionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I never liked the gloves. Scary, but impractical as weapons lol",
        userId: 2,
        questionId: 8,
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
   return queryInterface.bulkDelete('Answers', null, {});
  }
};
