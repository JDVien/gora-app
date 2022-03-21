const express = require('express');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { validationResult, check } = require('express-validator');
const { requireAuth} = require('../auth');

const router = express.Router();

const answerValidators = [
  check('content')
    .exists({ checkFalsy: true})
    .withMessage('Please provide an answer in the text field.')
]

// POST new Comment
router.post('/new', csrfProtection, answerValidators, requireAuth, asyncHandler(async(req, res) => {
  const { content, questionId, answerId } = req.body;
  const comment = db.Comment.build({ content, userId: req.session.auth.userId, questionId, answerId });
  const validatorErrors = validationResult(req);
  const answer = await db.Answer.findByPk(answerId, {
     include: [{ model: db.Comment, include: {model: db.User}}, {model: db.User}]
  })
  const questionToUpdate = await db.Question.findByPk(answer.questionId, {
      include: { model: db.Answer, include: [{ model: db.Comment, include: {model: db.User}}, {model: db.User}] }
  });

  if (validatorErrors.isEmpty()) {
      await comment.save();
      res.redirect(`/questions/${questionToUpdate.id}`);
  } else {
      const commentErrors = validatorErrors.array().map((error) => error.msg);

      let activeUser;
      if (req.session.auth.userId){
          activeUser = req.session.auth.userId;
      } else {
          activeUser = null;
      }

      res.render('question-detail', {
          title: 'Details',
          comments,
          commentErrors,
          activeUser,
          question: questionToUpdate,
          csrfToken: req.csrfToken(),
      })

  }
}));

// PATCH Comment
router.patch('/:id(\\d+)', async(req, res) => {
  const comment = await db.Comment.findByPk(req.params.id, {
      include: db.User
  })
  const answer = await db.Answer.findByPk(comment.answerId)
  if (!(req.body.content.length > 1)) {
      res.json({message: "Please provide a valid update"})
  }

  if (comment) {
      comment.content = req.body.content
      await comment.save()
      res.json({message: "Success", comment})

  } else {
      res.json({message: "Could not find post please try again"})
  }
})

// DELETE Comment
router.get('/delete/:id(\\d+)', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
  const commentId = parseInt(req.params.id, 10);
  const comment = await db.Comment.findByPk(commentId);
  const answer = await db.Answer.findByPk(comment.answerId)
  await comment.destroy();
  res.redirect(`/questions/${answer.questionId}`);
}))

module.exports = router;
