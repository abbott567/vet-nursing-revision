const mongoose = require('mongoose');

const Question = mongoose.model('Question');

module.exports = {
  buildQuestion: body => {
    const q = new Question({
      question: body.question,
      answers: [
        {answer: body.a},
        {answer: body.b},
        {answer: body.c},
        {answer: body.d}
      ],
      correct: body[body.correct],
      categories: []
    });
    for (let i = 0; i < body.categories.length; i++) {
      q.categories.push(body.categories[i]);
    }
    return q;
  }
};
