const express = require('express');

const router = new express.Router();

router.use('/', require('./src/index/routes'));
router.use('/cat', require('./src/question/routes'));
router.use('/add-category', require('./src/add-category/routes'));
router.use('/add-question', require('./src/add-question/routes'));
router.use('/results', require('./src/results/routes'));
router.use('/verify', require('./src/verify/routes'));

router.get('/reset', (req, res) => {
  res.clearCookie('correct');
  res.clearCookie('incorrect');
  res.clearCookie('answeredQuestions');
  res.redirect('/');
});

module.exports = router;
