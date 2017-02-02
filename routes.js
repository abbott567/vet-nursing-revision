const express = require('express');

const router = new express.Router();

router.use('/', require('./views/index/routes'));
router.use('/cat', require('./views/question/routes'));
router.use('/add-category', require('./views/add-category/routes'));
router.use('/add-question', require('./views/add-question/routes'));
router.use('/results', require('./views/results/routes'));

module.exports = router;
