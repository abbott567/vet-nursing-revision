const chai = require('chai');
const {getUrl} = require('../../functions');

const expect = chai.expect;

describe('getUrl(req)', () => {
  it('Should return / as a string if no query specified', () => {
    const req = {
      query: {}
    };
    const url = getUrl(req);
    expect(url).to.eql('/');
  });

  it('Should return /add-question as a string if req.query.question === "true"', () => {
    const req = {
      query: {
        question: 'true'
      }
    };
    const url = getUrl(req);
    expect(url).to.eql('/add-question');
  });

  it('Should return /add-category as a string if req.query.category === "true"', () => {
    const req = {
      query: {
        category: 'true'
      }
    };
    const url = getUrl(req);
    expect(url).to.eql('/add-category');
  });
});
