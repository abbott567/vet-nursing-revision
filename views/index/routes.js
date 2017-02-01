const express = require('express');
const {getQuestion} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  getQuestion([])
  .then(result => {
    res.render('index/view', {result});
  })
  .catch(err => {
    console.log(err);
  });
});

module.exports = router;
