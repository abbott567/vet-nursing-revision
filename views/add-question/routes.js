const express = require('express');
const {buildQuestion, getCategories} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('add-question/view');
});

router.post('/', (req, res) => {
  const q = buildQuestion(req.body);

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
