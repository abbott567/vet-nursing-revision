const express = require('express');
const mongoose = require('mongoose');

const Question = mongoose.model('Question');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('add-question/view');
});

router.post('/', (req, res) => {
  const q = new Question({
    question: req.body.question,
    answers: [
      {answer: req.body.a},
      {answer: req.body.b},
      {answer: req.body.c},
      {answer: req.body.d}
    ],
    correct: req.body.correct
  });

  q.save()
  .then(() => {
    res.render('add-question/view', {saved: true});
  })
  .catch(err => {
    console.log(err);
    res.render('add-question/view', {notSaved: true});
  });
});

module.exports = router;
