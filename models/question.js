const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answer: String
});

const createdAt = new mongoose.Schema({
  type: Date,
  default: Date.now
});

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema],
  createdAt
});

module.exports.Question = questionSchema;
