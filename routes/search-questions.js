const express = require('express');
const bcrypt = require('bcryptjs');
// const questionRepo = require('../public/javascripts/search-questions')
const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();
const { Op } = require('sequelize');
({ Question } = db);


async function searchQuestions(term) {
  const question = await db.Question.findAll({
    where: {
        [Op.or]: [
            {title: {[Op.substring]: `${term.toLowerCase()}`}},
            {title: {[Op.substring]: `%${term[1].toUpperCase() + term.slice(2)}`}}
        ]
    }
});
return question
}

// GET search
router.get('/', async(req, res) => {
  let questions;
  questions = await searchQuestions(`%${req.query.term}%`);
  console.log('---->' + questions)
  res.render('search-results.pug', {
      questionTitle: "Search Results",
      questions,
  });
})

module.exports = router;
