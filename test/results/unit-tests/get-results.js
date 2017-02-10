const chai = require('chai');
const {getResults} = require('../../../src/results/functions');

const expect = chai.expect;

describe('getResults(req)', () => {
  it('Should return results object if successful', () => {
    const req = {
      cookies: {
        correct: [
          '58926ca7a30eef5fe8ea585e'
        ],
        incorrect: [
          '58976ca7a30eef5fe8ea585e'
        ]
      }
    };
    return getResults(req)
    .then(results => {
      expect(results.totalCount).to.eql(2);
    });
  });

  it('Should throw an error if unsuccessful', () => {
    const req = {cookies: {}};
    return getResults(req)
    .catch(err => {
      expect(err).to.be.instanceOf(Error);
    });
  });
});
