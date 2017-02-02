const chai = require('chai');
const {randomNum, shuffle} = require('./functions');

const expect = chai.expect;

module.exports = {
  randomNum: () => {
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
  },

  shuffle: () => {
    return describe('shuffle([1, 2, 3, 4])', () => {
      it('Should return an array that contains the same characters', () => {
        const array = [1, 2, 3, 4];
        const shuffled = shuffle(array);
        expect(shuffled).to.include(array[0]);
        expect(shuffled).to.include(array[1]);
        expect(shuffled).to.include(array[2]);
        expect(shuffled).to.include(array[3]);
      });

      it('Should return an array that is not eql to the original array', () => {
        const array = [1, 2, 3, 4];
        let shuffled = shuffle([1, 2, 3, 4]);
        while (shuffled === array) {
          shuffled = shuffle([1, 2, 3, 4]);
        }
        expect(shuffled).to.not.eql(array);
      });
    });
  }
};

