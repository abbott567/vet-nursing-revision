const express = require('express');
const {getQuestion} = require('./functions');

const router = new express.Router();

router.get('/', (req, res, next) => {
  const answeredQuestions = req.cookies.answeredQuestions || [];
  getQuestion(answeredQuestions)
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

router.post('/', (req, res) => {
  const answeredQuestions = req.cookies.answeredQuestions || [];
  answeredQuestions.push(req.body.id);
  res.cookie('answeredQuestions', answeredQuestions);
  res.redirect('/');
});

module.exports = router;
