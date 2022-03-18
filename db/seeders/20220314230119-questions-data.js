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
    {
      title: 'What is the best trap in the Saw franchise?',
      content: 'There are a lot of creative death traps in the series, but which one was the best?',
      userId: '1',
      topicId: '1',
      imgLink: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-08-at-7.57.11-AM.png?w=1200&ssl=1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Is 28 Days Later the scariest zombie movie ever?',
      content: 'There are so many zombie flicks to choose from, but 28 Days Later is my favorite by far!',
      userId: '2',
      topicId: '1',
      imgLink: "https://www.eyeforfilm.co.uk/images/newsite/28-Days-Later_600.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What are some good horror comedies?',
      content: 'I just watched Shaun of the Dead and would like to see more of this genre. Recommendations?',
      userId: '3',
      topicId: '1',
      imgLink: "https://cdn.mos.cms.futurecdn.net/ErawYc7jFwRDX7CGimmCWa-970-80.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "What is Dario Argento's best horror film?",
      content: 'Everyone talks about Suspiria, but I think Phenomena is his best work! Curious about what others think...',
      userId: '4',
      topicId: '1',
      imgLink: "https://images-na.ssl-images-amazon.com/images/I/51GKMD5AJCL._SX300_SY300_QL70_FMwebp_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Why does Freddy Krueger wear the razor gloves?',
      content: 'Seems like an arbitrary choice of murder weapon.',
      userId: '1',
      topicId: '1',
      imgLink: "https://cdn.mos.cms.futurecdn.net/M4esmk8QffkRwsYcCJqv48-970-80.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What movie gave you a real phobia after watching?',
      content: 'I felt claustrophobic for weeks after seeing The Descent for the first time.',
      userId: '2',
      topicId: '1',
      imgLink: "https://cdn.mos.cms.futurecdn.net/svXvHFcAJ9Chd2uFyWcW5Q-970-80.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Who did the makeup for An American Werewolf in London?',
      content: 'Some of the best ever; it still holds up!',
      userId: '3',
      topicId: '1',
      imgLink: "https://cdn.mos.cms.futurecdn.net/LGGWeVZr9YiCBdbkmiHD4N-970-80.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Are there any explanations for all the plot holes in It Follows?',
      content: 'For example, if the ghost following someone is covered in paint, would that not prove to everyone they exist?',
      userId: '4',
      topicId: '1',
      imgLink: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/It-Follows-Tall-Man.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'In The Exorcist, how did they do the voice of Reagan in the movie?',
      content: 'There is no way that voice belongs to Linda Blair, right?',
      userId: '5',
      topicId: '1',
      imgLink: "https://cdn.mos.cms.futurecdn.net/vwbKHvnjabmucMZCYfuTcJ-970-80.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What horror films aged the worst?',
      content: 'I used to like Cabin Fever, but now I feel like it is unwatchable!',
      userId: '5',
      topicId: '1',
      imgLink: "https://upload.wikimedia.org/wikipedia/en/7/71/Movie_poster_cabin_fever.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Who is the true villain in Frankenstein by Mary Shelley?',
      content: 'Is it the so-called monster made by Dr. Frankenstein or the villagers who seemd devoid of humanity?',
      userId: '3',
      topicId: '2',
      imgLink: "https://images-na.ssl-images-amazon.com/images/I/41CC3AXG7nL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "What is Stephen King's best horror novel?",
      content: 'He made so many classics that it is almost impossible to choose the best. I think It might be his best work, though.',
      userId: '4',
      topicId: '2',
      imgLink: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stephenking-index-1596489768.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Who is scarier in The Silence of the Lambs, Hannibal Lecter or Buffalo Bill?',
      content: 'They are both frightening in such different ways, it is hard to decide...',
      userId: '1',
      topicId: '2',
      imgLink: "https://cdn2.penguin.com.au/covers/400/9780099532927.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What horror book had the greatest impact on popular culture?',
      content: 'I would say it has to be Dracula by Bram Stoker.',
      userId: '2',
      topicId: '2',
      imgLink: "https://m.media-amazon.com/images/I/51M0okPhZoL.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Why are vampires and romance linked so often?',
      content: "Aside from Twilight, did it start with Anne Rice's Interview with the Vampire?",
      userId: '3',
      topicId: '2',
      imgLink: "https://images-na.ssl-images-amazon.com/images/I/91IVrORczaL.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Why did H.P. Lovecraft only write such short pieces of fiction?',
      content: 'At the Mountains of Madness is one of my favorites, but I wish it was longer!',
      userId: '4',
      topicId: '2',
      imgLink: "https://149349728.v2.pressablecdn.com/wp-content/uploads/2011/02/0*yZDWa9qzijGQNqhI.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Why is the novel World War Z so much better than its film adaptation?',
      content: 'I think the interview style of the book really gives it most of its appeal.',
      userId: '1',
      topicId: '2',
      imgLink: "https://cdn.pastemagazine.com/www/articles/2018/08/08/world-war-z.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Is Joe Hill as good of a writer as his father?',
      content: 'I just found out his dad is Stephen King! Who knew?!',
      userId: '2',
      topicId: '2',
      imgLink: "https://images-na.ssl-images-amazon.com/images/I/714rjAuY8DL.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Why is the The Walking Dead the most famous horror comic?',
      content: 'I think it is overrated because of the popularity of the show.',
      userId: '3',
      topicId: '2',
      imgLink: "https://images-na.ssl-images-amazon.com/images/I/612bK1krzxL._SX319_BO1,204,203,200_.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What horror comics make great use of its setting like 30 Days of Night?',
      content: 'I just read it, and I am looking for similar recommendations!',
      userId: '4',
      topicId: '2',
      imgLink: "https://m.media-amazon.com/images/I/41IbBohDH1L.jpg",
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
