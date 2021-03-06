const express = require('express');
const {getResults} = require('./functions');

const router = new express.Router();

router.get('/', (req, res, next) => {
  getResults(req)
  .then(results => {
    res.render('results/view', results);
  })
  .catch(err => {
    next(err);
  });
});

module.exports = router;
