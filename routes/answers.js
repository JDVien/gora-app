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
router.post('/new', csrfProtection, answerValidators, requireAuth, asyncHandler(async(req, res) => {
    const { content, questionId } = req.body;
    const answer = db.Answer.build({ content, userId: req.session.auth.userId, questionId });
    const validatorErrors = validationResult(req);

    const questionToUpdate = await db.Question.findByPk(questionId, {
        include: { model: db.Answer, include: [{ model: db.Comment, include: {model: db.User}}, {model: db.User}] }
    });

    if (validatorErrors.isEmpty()) {
        await answer.save();
        res.redirect(`/questions/${questionId}`);
    } else {
        const answerErrors = validatorErrors.array().map((error) => error.msg);

        let activeUser;
        if (req.session.auth.userId){
            activeUser = req.session.auth.userId;
        } else {
            activeUser = null;
        }

        res.render('question-detail', {
            title: 'Details',
            answer,
            answerErrors,
            activeUser,
            question: questionToUpdate,
            csrfToken: req.csrfToken(),
        })
        // res.redirect(`/questions/${questionId}`)
    }
}));

router.patch('/:id(\\d+)', async(req, res) => {
    const answer = await db.Answer.findByPk(req.params.id)

    if (!(req.body.content.length > 1)) {
        res.json({message: "Please provide a valid update"})
    }

    if (answer) {
        answer.content = req.body.content
        await answer.save()
        res.json({message: "Success", answer})
    } else {
        res.json({message: "Could not find post please try again"})
    }
})

module.exports = router;
