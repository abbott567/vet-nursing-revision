const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
  getQuestion: () => {
    // Get the count of all users
    Question.count().exec((err, count) => {
      const random = Math.floor(Math.random() * count);
      if (err) {
        console.log(err);
      }

      Question.findOne().skip(random).exec((err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });
    });
  }
};
