const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Express'});
});

router.use('/add-question', require('./views/add-question/routes'));

module.exports = router;
