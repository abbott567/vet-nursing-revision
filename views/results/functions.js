const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
  getResults: req => {
    return Promise.all([
      Question.find({
        _id: req.cookies.correct
      }),
      Question.find({
        _id: req.cookies.incorrect
      })
    ])
    .then(([correct, incorrect]) => {
      return {
        correctCount: correct.length,
        totalCount: correct.length + incorrect.length,
        correct,
        incorrect
      };
    });
  }
};
