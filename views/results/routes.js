const express = require('express');
const {getResults} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  getResults(req)
  .then(results => {
    res.render('results/view', results);
  });
});

module.exports = router;
