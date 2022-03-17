const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler} = require('./utils');
const { validationResult, check } = require('express-validator');
const { requireAuth } = require('../auth');

const router = express.Router();

const answerValidators = [
    check('content')
      .exists({ checkFalsy: true})
      .withMessage('Please provide an answer in the text field.')
]

/* POST New Answer */
router.post('/questions/:id(\\d+)', csrfProtection, answerValidators, requireAuth, asyncHandler(async(req, res) => {
    const { content } = req.body;
    const answer = db.Answer.build({ content, userId: req.session.auth.userId, questionId: req.session.auth.questionId });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await answer.save();
        res.redirect('/questions/???');
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('/questions/???', {
            title: 'Details',
            content,
            errors,
            csrfToken: req.csrfToken(),
        })
    }
}))
