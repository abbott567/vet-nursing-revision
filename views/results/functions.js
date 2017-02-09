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
      const correctCount = correct.length;
      const incorrectCount = incorrect.length;
      const totalCount = correct.length + incorrect.length;
      const percentCount = Math.round((correctCount / totalCount) * 100);

      return {
        correctCount,
        incorrectCount,
        totalCount,
        percentCount,
        correct,
        incorrect
      };
    })
    .catch(err => {
      throw err;
    });
  }
};
