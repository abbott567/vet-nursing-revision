const express = require('express');
const mongoose = require('mongoose');
const {getQuestion} = require('./functions');

const Question = mongoose.model('Question');
const router = new express.Router();

router.get('/:catId/question', (req, res, next) => {
  const answeredQuestions = req.cookies.answeredQuestions || [];
  getQuestion(answeredQuestions, req.params.catId)
  .then(result => {
    if (result) {
      res.render('question/view', {result});
    } else {
      res.redirect('/finished');
    }
  })
  .catch(err => {
    next(err);
  });
});

router.post('/:catId/question', (req, res, next) => {
  Question.findOne({_id: req.body.id})
  .then(q => {
    if (req.body.answer === q.correct) {
      const correct = req.cookies.correct || [];
      correct.push(q.id);
      res.cookie('correct', correct);
    } else {
      const incorrect = req.cookies.incorrect || [];
      incorrect.push(q.id);
      res.cookie('incorrect', incorrect);
    }
  })
  .then(() => {
    const answeredQuestions = req.cookies.answeredQuestions || [];
    answeredQuestions.push(req.body.id);
    res.cookie('answeredQuestions', answeredQuestions);
  })
  .then(() => {
    res.redirect(`/cat/${req.params.catId}/question`);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
