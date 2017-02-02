const mongoose = require('mongoose');
const {randomNum} = require('../common/functions');
const {shuffle} = require('../common/functions');

const Question = mongoose.model('Question');

module.exports = {
  getQuestion: answeredQuestions => {
    return Question.find({_id: {$nin: answeredQuestions}})
    .then(results => {
      const result = results[randomNum(0, randomNum.length - 1)];
      result.answers = shuffle(result.answers);
      return result;
    });
  }
};
