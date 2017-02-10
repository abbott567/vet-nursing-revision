const express = require('express');
const mongoose = require('mongoose');
const {getQuestion, updateTotals, updateQuestionsAnswered} = require('./functions');

const Question = mongoose.model('Question');
const router = new express.Router();

router.get('/:catId/question', (req, res) => {
  getQuestion(req, Question)
  .then(result => {
    if (result) {
      res.render('question/view', {result});
    } else {
      res.redirect('/results');
    }
  });
});

router.post('/:catId/question', (req, res) => {
  updateTotals(req, res, Question)
  .then(() => {
    updateQuestionsAnswered(req, res);
  })
  .then(() => {
    res.redirect(`/cat/${req.params.catId}/question`);
  });
});

module.exports = router;
