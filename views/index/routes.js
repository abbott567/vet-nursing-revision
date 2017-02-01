const express = require('express');
const {getQuestion} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  const answeredQuestions = req.cookies.answeredQuestions || [];
  getQuestion(answeredQuestions)
  .then(result => {
    res.render('index/view', {result});
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;
