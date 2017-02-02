const chai = require('chai');
const {getQuestion} = require('./functions');

const expect = chai.expect;

module.exports = {
  getQuestion: () => {
    return describe('getQuestion([], id)', () => {
      it('Should return a question', () => {
        return getQuestion([], '58931f61a7a8837ecf85a844')
        .then(result => {
          expect(result._id).to.not.eql(undefined);
        })
        .catch(err => {
          console.log(err);
        });
      });
    });
  }
};
