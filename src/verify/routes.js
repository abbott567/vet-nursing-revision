const express = require('express');
const {getUrl} = require('./functions');

const router = new express.Router();

router.get('/', (req, res) => {
  res.render('verify/view');
});

router.post('/', (req, res) => {
  const url = getUrl(req);
  if (req.body.username === process.env.USERNAME && req.body.password === process.env.PASSWORD) {
    res.cookie('verified', true, {expires: new Date(Date.now() + ((1000 * 60) * 60 * 24)), httpOnly: true});
    res.redirect(url);
  } else {
    res.render('verify/view', {error: true});
  }
});

module.exports = router;

