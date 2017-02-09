const express = require('express');
const {getResults} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  if (req.cookies.incorrect === undefined || req.cookies.correct === undefined) {
    res.redirect('/');
  } else {
    getResults(req)
    .then(results => {
      res.render('results/view', results);
    });
  }
});

module.exports = router;
