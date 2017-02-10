const {randomNum} = require('../common/functions');
const {shuffle} = require('../common/functions');

module.exports = {
  getQuestion: (req, Question) => {
    const answeredQuestions = req.cookies.answeredQuestions || [];
    return Question.find({
      $and: [
        {_id: {$nin: answeredQuestions}},
        {categories: req.params.catId}
      ]
    })
    .then(results => {
      if (results.length > 0) {
        const result = results[randomNum(0, results.length - 1)];
        result.answers = shuffle(result.answers);
        return result;
      }
      return false;
    })
    .catch(err => {
      throw err;
    });
  },

  updateTotals: (req, res, Question) => {
    return Question.findOne({_id: req.body.id})
    .then(q => {
      if (req.body.answer === q.correct) {
        const correct = req.cookies.correct || [];
        correct.push(q.id);
        res.cookie('correct', correct);
      } else {
        const incorrect = req.cookies.incorrect || [];
        incorrect.push(q.id);
        res.cookie('incorrect', incorrect);
      }
      return true;
    })
    .catch(err => {
      throw err;
    });
  },

  updateQuestionsAnswered: (req, res) => {
    const answeredQuestions = req.cookies.answeredQuestions || [];
    answeredQuestions.push(req.body.id);
    res.cookie('answeredQuestions', answeredQuestions);
    return;
  }
};

