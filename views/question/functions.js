const mongoose = require('mongoose');
const {randomNum} = require('../common/functions');
const {shuffle} = require('../common/functions');

const Question = mongoose.model('Question');

module.exports = {
  getQuestion: (answeredQuestions, catId) => {
    return Question.find({
      $and: [
        {_id: {$nin: answeredQuestions}},
        {categories: catId}
      ]
    })
    .then(results => {
      const result = results[randomNum(0, results.length - 1)];
      result.answers = shuffle(result.answers);
      return result;
    });
  }
};

