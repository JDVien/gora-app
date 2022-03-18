const express = require('express');
const bcrypt = require('bcryptjs');
const questionRepo = require('../public/javascripts/search-questions')
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
    // console.log(allQuestions[0].Answers)
    res.render('questions.pug', { title: 'Questions', allQuestions})
}));

router.get('/:id(\\d+)',requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {
        include: [{ model: db.Answer, include: [{ model: db.Comment, include: {model: db.User}}, {model: db.User}] }, { model: db.User}]
    });
    let activeUser;
    if (req.session.auth.userId){
        activeUser = req.session.auth.userId;
    } else {
        activeUser = null;
    }

    res.render('question-detail', { question, title: 'Details', activeUser, csrfToken: req.csrfToken()});
}));

/* GET Create Question Page */
router.get('/new', csrfProtection, asyncHandler(async (req, res) => {
    const question = db.Question.build();
    const topics = await db.Topic.findAll();

    res.render('create-question', {
        title: 'Ask a Question',
        question,
        topics,
        csrfToken: req.csrfToken()
    });
}));

/* POST New Question  */
router.post('/new', csrfProtection, questionValidators, requireAuth, asyncHandler(async (req, res) => {
    const { topicId, title, content, imgLink } = req.body;
    const question = db.Question.build({ topicId, title, content, imgLink, userId: req.session.auth.userId });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await question.save();
      res.redirect('/questions');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('create-question', {
        title: 'Ask a Question',
        question,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
}));

/* EDIT Question */
router.post('/:id(\\d+)', questionValidators, requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    // TODO editing the question
    const questionId = parseInt(req.params.id, 10);
    const questionToUpdate = await db.Question.findByPk(questionId, {
        include: { model: db.Answer, include: [{ model: db.Comment, include: {model: db.User}}, {model: db.User}] }
    });

    const {
        title,
        content,
        imgLink,
        userId,
        topicId
    } = req.body;

    let question = { title, content, imgLink, userId, topicId };

    const validatorErrors = validationResult(req);
    if(validatorErrors.isEmpty()) {
        await questionToUpdate.update(question);
        res.redirect(`/questions/${questionId}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        question = questionToUpdate;

        let activeUser;
        if (req.session.auth.userId){
            activeUser = req.session.auth.userId;
        } else {
            activeUser = null;
        }
        res.render('question-detail', { question, title: 'Details', activeUser, csrfToken: req.csrfToken(), errors});
    }
}));

router.get('/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId);
    await question.destroy();
    res.redirect('/questions');
}))

module.exports = router;
