const express = require('express');
const {getQuestion, updateTotals, updateQuestionsAnswered} = require('./functions');

const router = new express.Router();

router.get('/:catId/question', (req, res) => {
  getQuestion(req)
  .then(result => {
    if (result) {
      res.render('question/view', {result});
    } else {
      res.redirect('/results');
    }
  });
});

router.post('/:catId/question', (req, res) => {
  updateTotals(req, res)
  .then(() => {
    updateQuestionsAnswered(req, res);
  })
  .then(() => {
    res.redirect(`/cat/${req.params.catId}/question`);
  });
});

module.exports = router;
