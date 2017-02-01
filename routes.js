const express = require('express');

const router = new express.Router();

router.use('/', require('./views/index/routes'));
router.use('/add-question', require('./views/add-question/routes'));

module.exports = router;