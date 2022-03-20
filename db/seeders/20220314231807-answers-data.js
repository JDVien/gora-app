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
      {
        content: "I can't be in tight spaces after seeing that movie either haha",
        userId: 4,
        questionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I'm scared of the woods because of every horror movie ever.",
        userId: 3,
        questionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Hard to develop a genuine phobia just from watching a movie.",
        userId: 1,
        questionId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Rick Baker! Legend!",
        userId: 4,
        questionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "You could probably just google it bro",
        userId: 1,
        questionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Rick Baker is the man",
        userId: 2,
        questionId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "There really are too many plot holes to count",
        userId: 1,
        questionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "What if the person being followed is on an airplane?",
        userId: 2,
        questionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "It's a fun movie, but I agree, lots of plot holes.",
        userId: 3,
        questionId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The had voice actress Mercedes McCambridge do the voice for the possession scenes",
        userId: 1,
        questionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Yeah idk but that could not have been Linda Blair",
        userId: 2,
        questionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I think it was the devil",
        userId: 3,
        questionId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "You're crazy bro, that movie is campy but def still watchable",
        userId: 4,
        questionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I like that movie!",
        userId: 3,
        questionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I think horror films in general don't age great most of the time",
        userId: 2,
        questionId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "We as humans are all capable of being the villain",
        userId: 4,
        questionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I mean, if we are talking monsters, I would say it's...the monster.",
        userId: 1,
        questionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I haven't read it, but it's probably a little bit of both",
        userId: 2,
        questionId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The Gunslinger series. That's his magnum opus.",
        userId: 1,
        questionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "'It' is not really that scary, I would go with The Shining",
        userId: 2,
        questionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Hard to really top The Stand. Has everything you want from King",
        userId: 3,
        questionId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "That is a scarrry book, everyone is creepy in it",
        userId: 2,
        questionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "My vote is Hannibal Lecter",
        userId: 3,
        questionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Lecter gets in your head. Buffalo Bill gets under your skin, literally lol",
        userId: 4,
        questionId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Yeah I mean they have made 1000 vampire movies because of Dracula",
        userId: 3,
        questionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Everyone knows Dracula, for sure",
        userId: 4,
        questionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Stephen King has had a massive influence, but yeah Dracula is hard to top",
        userId: 1,
        questionId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Is this even horror? Romance in a horror-themed world, more like it",
        userId: 4,
        questionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Something about vampires being charming people? Probably goes back to Dracula",
        userId: 1,
        questionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "That's interesting, hadn't thought of it before",
        userId: 2,
        questionId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Yeah, At the Mountains of Madness is about the longest of what he wrote",
        userId: 1,
        questionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The Case of Dexter Ward is another longer one of his!",
        userId: 2,
        questionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "He was a master of the short story, no need to extend it out for no reason",
        userId: 3,
        questionId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "World War Z really isn't that good. Like a beach read for guys",
        userId: 2,
        questionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I thought both the movie and book were pretty disappointing",
        userId: 3,
        questionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "The structure of the book really couldn't be translated to film, to be fair",
        userId: 4,
        questionId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Not as good as his father, but pretty good",
        userId: 3,
        questionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "They aren't as sophisticated as King's best works, but he's still got time",
        userId: 4,
        questionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I really liked Heart Shaped Box, reminded me a lot of King",
        userId: 1,
        questionId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I mean anything Robert Kirkman makes, people will pay attention to",
        userId: 4,
        questionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Yeah people only know it from the show, but it's still good",
        userId: 1,
        questionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "I thought the series was awesome, idk what you mean",
        userId: 2,
        questionId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Locke & Key is pretty awesome, great use of settings in that",
        userId: 1,
        questionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Through the Woods! very creepy setting",
        userId: 2,
        questionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Oh man I don't think anything did that better than 30 days of night",
        userId: 3,
        questionId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Time will tell, but I think there is some serious potential",
        userId: 2,
        questionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "If they don't get this right, then someone seriously messed up. It's perfect for a movie or a show",
        userId: 3,
        questionId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        content: "Video game adaptations are never good, but idk",
        userId: 4,
        questionId: 24,
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
