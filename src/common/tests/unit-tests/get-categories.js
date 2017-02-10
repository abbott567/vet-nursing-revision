const chai = require('chai');
const mongoose = require('mongoose');
const {getCategories} = require('../../functions');

const Category = mongoose.model('Category');
const expect = chai.expect;

describe('getCategories(Category)', () => {
  it('Should return an array of categories if successful', () => {
    return getCategories(Category)
    .then(result => {
      expect(result).to.not.eql(undefined);
      expect(Array.isArray(result)).to.eql(true);
    });
  });

  it('Should catch an error if one occurs', () => {
    Category.find = function () {
      return new Promise((resolve, reject) => {
        reject(new Error('Error'));
      });
    };
    return getCategories(Category)
    .catch(err => {
      expect(err).to.be.instanceOf(Error);
    });
  });
});
