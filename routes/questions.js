const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

const questionValidators = [
    check('title')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a Question')
      .isLength({ max: 255 })
      .withMessage('Question can not be longer than 255.'),
    check('content')
      .exists({ checkFalsy: true })
      .withMessage('Please provide description of Question.'),
    check('imgLink')
      .exists({ checkFalsy: true })
      .withMessage('Please provide an image link.')
      .isLength({ max: 255 })
      .withMessage('Image link needs to be fewer than 255 characters.'),
  ];

router.get('/', asyncHandler(async (req, res) => {
    const allQuestions = await db.Question.findAll({
        include: { model: db.Answer }
    })
    console.log(allQuestions[0].Answers)
    res.render('questions.pug', { title: 'Questions', allQuestions})
}));

router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {
        include: { model: db.Answer, include: { model: db.Comment, include: {model: db.User}} }
    });
    let activeUser;
    if (req.session.auth.userId){
        activeUser = req.session.auth.userId;
    } else {
        activeUser = null;
    }
    console.log('----------------------> \n\n', req.session.auth.userId)
    console.log('----------------------> \n\n', question.userId)
    res.render('question-detail', { question, title: 'Details', activeUser });
}));

/* GET Create Question Page */
router.get('/new', csrfProtection, (req, res) => {
    const question = db.Question.build();
    res.render('create-question', {
        title: 'Ask a Question',
        question,
        csrfToken: req.csrfToken()
    });
});

/* POST New Question  */
router.post('/new', csrfProtection, questionValidators, asyncHandler(async (req, res) => {
    const { title, content, imgLink } = req.body;

    const question = db.Question.build({ title, content, imgLink });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await question.save();
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('/new', {
        title: 'Ask a Question',
        question,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
}));

router.post('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    // TODO editing the question
}))

module.exports = router;
