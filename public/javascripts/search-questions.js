// const {sequelize} = require('../../db/models'); // throw uncaught reference error in console
// const { Op } = require('sequelize');
// const db = require('../../db/models');
// ({ Question } = db);


// async function searchQuestions(term) {
//   const question = await db.Question.findAll({
//     where: {
//         [Op.or]: [
//             {title: {[Op.substring]: `${term.toLowerCase()}`}},
//             {title: {[Op.substring]: `%${term[1].toUpperCase() + term.slice(2)}`}}
//         ]
//     }
// });
// return question
// }


// module.exports = {
//   searchQuestions
// }
