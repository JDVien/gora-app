const express = require('express');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const allQuestions = await db.Question.findAll({
        include: { model: db.Answer }
    })
    console.log(allQuestions[0].Answers)
    res.render('questions.pug', { title: 'Questions', allQuestions})
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const questionId = parseInt(req.params.id, 10);
    const question = await db.Question.findByPk(questionId, {
        include: { model: db.Answer, include: { model: db.Comment } }
    });
    let activeUser;
    if (req.session.auth.userId){
        activeUser = req.session.auth.userId;
    }
    console.log(req.session.auth.userId)
    res.render('question-detail', { question, title: 'Details', activeUser });
}));

module.exports = router;
