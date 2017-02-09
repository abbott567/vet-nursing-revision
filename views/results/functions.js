const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
  getResults: req => {
    const validate = new Promise((resolve, reject) => {
      if (req.cookies.incorrect === undefined || req.cookies.correct === undefined) {
        reject(new Error('Error, cookies must be defined'));
      }
      resolve(true);
    });
    return Promise.all([
      validate,
      Question.find({
        _id: req.cookies.correct
      }),
      Question.find({
        _id: req.cookies.incorrect
      })
    ])
    .then(([valid, correct, incorrect]) => {
      const correctCount = correct.length;
      const incorrectCount = incorrect.length;
      const totalCount = correct.length + incorrect.length;
      const percentCount = Math.round((correctCount / totalCount) * 100);

      return {
        valid,
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
