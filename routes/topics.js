const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allQuestions = await db.Question.findAll({
        include: { model: db.Answer }
    })
    res.render('questions.pug', { title: 'Questions', allQuestions})
}));

router.get('/:id(\\d+)/questions', requireAuth, asyncHandler(async (req, res) => {
    const topicId = parseInt(req.params.id, 10)
    const allQuestions = await db.Question.findAll({
        where: { topicId },
        include: { model: db.Answer, include: { model: db.Comment, include: {model: db.User}} }
    });
    const topic = await db.Topic.findByPk(topicId);
    res.render('topics', { title: 'Topics', allQuestions, topic});
}));

router.get('/:id(\\d+)/questions/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {
        include: { model: db.Answer, include: { model: db.Comment, include: {model: db.User} } }
    });
    let activeUser;
    if (req.session.auth.userId){
        activeUser = req.session.auth.userId;
    } else {
        activeUser = null;
    }
    // console.log('----------------------> \n\n', req.session.auth.userId)
    // console.log('----------------------> \n\n', question.userId)
    res.render('question-detail', { question, title: 'Details', activeUser});
}));

module.exports = router;
