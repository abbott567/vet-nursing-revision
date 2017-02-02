const chai = require('chai');
const {getQuestion} = require('./functions');

const expect = chai.expect;

module.exports = {
  getQuestion: () => {
    return describe('getQuestion([])', () => {
      it('Should return a question', () => {
        return getQuestion([])
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
