const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answer: String
});

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema],
  correct: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports.Question = questionSchema;
