const chai = require('chai');
const mongoose = require('mongoose');
const {getQuestion} = require('../../functions');

const expect = chai.expect;

describe('getQuestion(req, Question)', () => {
  it('Should return a question', () => {
    const Question = mongoose.model('Question');
    const req = {
      cookies: {
        answeredQuestions: []
      },
      params: {
        catId: '58931f61a7a8837ecf85a844'
      }
    };
    return getQuestion(req, Question)
    .then(result => {
      expect(result._id).to.not.eql(undefined);
    });
  });

  it('Should return false if it can\'t find a question', () => {
    const Question = mongoose.model('Question');
    const req = {
      cookies: {
        answeredQuestions: []
      },
      params: {
        catId: ''
      }
    };
    return getQuestion(req, Question)
    .then(result => {
      expect(result).to.eql(false);
    });
  });

  it('Should return an error if the query errors', () => {
    const Question = mongoose.model('Question');
    const req = {
      cookies: {
        answeredQuestions: []
      },
      params: {
        catId: ''
      }
    };
    Question.find = function () {
      return new Promise((resolve, reject) => {
        reject(new Error('Error'));
      });
    };
    return getQuestion(req, Question)
    .catch(err => {
      expect(err).to.be.instanceOf(Error);
    });
  });
});
