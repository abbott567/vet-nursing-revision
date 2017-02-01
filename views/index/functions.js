const mongoose = require('mongoose');
const {randomNum} = require('../common/functions');

const Question = mongoose.model('Question');

module.exports = {
  getQuestion: answeredQuestions => {
    return Question.find({_id: {$nin: answeredQuestions}})
    .then(results => {
      return results[randomNum(0, randomNum.length - 1)];
    });
  }
};
