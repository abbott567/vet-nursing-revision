const express = require('express');
const {getQuestion, updateTotals, updateQuestionsAnswered} = require('./functions');

const router = new express.Router();

router.get('/:catId/question', (req, res, next) => {
  getQuestion(req)
  .then(result => {
    if (result) {
      res.render('question/view', {result});
    } else {
      res.redirect('/results');
    }
  })
  .catch(err => {
    next(err);
  });
});

router.post('/:catId/question', (req, res, next) => {
  updateTotals(req, res)
  .then(() => {
    updateQuestionsAnswered(req, res);
  })
  .then(() => {
    res.redirect(`/cat/${req.params.catId}/question`);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
