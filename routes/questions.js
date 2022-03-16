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
}))

module.exports = router;