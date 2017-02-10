const express = require('express');
const mongoose = require('mongoose');
const {getCategories} = require('../common/functions');

const Category = mongoose.model('Category');
const router = new express.Router();

router.get('/', (req, res) => {
  getCategories(Category)
  .then(categories => {
    res.render('index/view', {categories});
  });
});

module.exports = router;
