const mongoose = require('mongoose');
const chai = require('chai');
const {updateTotals} = require('../../functions');

const expect = chai.expect;

describe('updateTotals(req, res, Question)', () => {
  it('Should return true if totals updated and answer correct', () => {
    const Question = mongoose.model('Question');
    const req = {
      body: {
        id: '58926ca7a30eef5fe8ea585e',
        answer: 'Tuna'
      },
      cookies: {
        correct: [],
        incorrect: []
      }
    };
    const res = {
      cookie: () => {}
    };
    return updateTotals(req, res, Question)
    .then(result => {
      expect(result).to.eql(true);
    });
  });

  it('Should return true if totals updated and answer incorrect', () => {
    const Question = mongoose.model('Question');
    const req = {
      body: {
        id: '58926ca7a30eef5fe8ea585e'
      },
      cookies: {
        correct: [],
        incorrect: []
      }
    };
    const res = {
      cookie: () => {}
    };
    return updateTotals(req, res, Question)
    .then(result => {
      expect(result).to.eql(true);
    });
  });

  it('Throw an error if query errors', () => {
    const Question = {
      findOne() {
        return new Promise((resolve, reject) => {
          reject(new Error('Error'));
        });
      }
    };
    const req = {
      body: {
        id: '58926ca7a30eef5fe8ea585e'
      },
      cookies: {
        correct: [],
        incorrect: []
      }
    };
    const res = {
      cookie: () => {}
    };
    return updateTotals(req, res, Question)
    .catch(err => {
      expect(err).to.be.instanceOf(Error);
    });
  });
});
