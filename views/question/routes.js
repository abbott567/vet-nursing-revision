const express = require('express');
const {getQuestion} = require('./functions');

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

router.post('/:catId/question', (req, res) => {
  const answeredQuestions = req.cookies.answeredQuestions || [];
  answeredQuestions.push(req.body.id);
  res.cookie('answeredQuestions', answeredQuestions);
  res.redirect(`/cat/${req.params.catId}/question`);
});

module.exports = router;
