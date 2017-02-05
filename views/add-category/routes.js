const express = require('express');
const mongoose = require('mongoose');

const router = new express.Router();
const Category = mongoose.model('Category');

router.get('/', (req, res) => {
  if (req.cookies.verified === 'true') {
    res.render('add-category/view');
  } else {
    res.redirect('/verify?category=true');
  }
});

router.post('/', (req, res) => {
  const c = new Category({
    name: req.body.name
  });

  c.save()
  .then(() => {
    res.render('add-category/view', {saved: true});
  })
  .catch(err => {
    console.log(err);
    res.render('add-category/view', {notSaved: true});
  });
});

module.exports = router;
