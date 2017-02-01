const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
  buildQuestion: body => {
    return new Question({
      question: body.question,
      answers: [
        {answer: body.a},
        {answer: body.b},
        {answer: body.c},
        {answer: body.d}
      ],
      correct: body[body.correct]
    });
  }
};
