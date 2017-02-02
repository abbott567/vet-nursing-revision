const mongoose = require('mongoose');

const Category = mongoose.model('Category');

module.exports = {
  randomNum: (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  },

  shuffle: array => {
    for (let i = array.length; i; i--) {
      const n = Math.floor(Math.random() * i);
      [array[i - 1], array[n]] = [array[n], array[i - 1]];
    }
    return array;
  },

  getCategories: () => {
    return Category.find({})
    .then(results => {
      return results;
    })
    .catch(err => {
      return err;
    });
  }
};
