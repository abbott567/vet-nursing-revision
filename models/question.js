const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  answer: String
});

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [answerSchema],
  createdAt: {type: Date, default: Date.now}
});

module.exports.Game = questionSchema;
