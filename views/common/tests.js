const chai = require('chai');
const {randomNum} = require('./functions');

const expect = chai.expect;

module.exports = () => {
  return describe('randomNum(1, 10)', () => {
    it('Should return a number', () => {
      const num = randomNum(1, 10);
      expect(typeof num).to.eql('number');
    });

    it('Should return a number between 1 and 10', () => {
      const num = randomNum(1, 10);
      expect(num).to.be.below(11);
      expect(num).to.be.above(0);
    });
  });
};

