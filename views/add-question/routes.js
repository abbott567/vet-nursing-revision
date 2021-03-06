const express = require('express');
const {getCategories} = require('../common/functions');
const {buildQuestion} = require('./functions');

const router = new express.Router();

router.get('/', (req, res, next) => {
  if (req.cookies.verified === 'true') {
    getCategories()
    .then(categories => {
      res.render('add-question/view', {categories});
    })
    .catch(err => {
      next(err);
    });
  } else {
    res.redirect('/verify?question=true');
  }
});

router.post('/', (req, res, next) => {
  const q = buildQuestion(req.body);
  q.save()
  .then(() => {
    return Promise.all([getCategories()]);
  })
  .then(([categories]) => {
    res.render('add-question/view', {categories, saved: true});
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
