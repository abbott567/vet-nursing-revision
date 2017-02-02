const express = require('express');
const {getCategories} = require('../common/functions');

const router = new express.Router();

router.get('/', (req, res) => {
  getCategories()
  .then(categories => {
    res.render('index/view', {categories});
  });
});

module.exports = router;
