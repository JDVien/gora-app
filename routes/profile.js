// for routes/profile.js
const express = require('express');
const bcrypt = require('bcryptjs');
const questionRepo = require('../public/javascripts/search-questions')
const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();


// GET profile
router.get('/:id(\\d+)/', requireAuth, asyncHandler(async(req, res) => {
  const userId = parseInt(req.params.id, 10)
  let questions;
  // questions = await db.Question.findAll({
  //   include: { model: db.User, include: { model: db.Answer, include: { model: db.Comment }} }
  // })
  questions = await db.Question.findAll({where: {userId}})
 console.log(questions);
  let activeUser;
    if (req.session.auth.userId){
        activeUser = req.session.auth.userId;
    } else {
        activeUser = null;
    }
  const user = await db.User.findByPk(userId);
  res.render('profile', {
      profileTitle: "My Questions",
      questions,
      user,
      activeUser
  });
}));


module.exports = router;
