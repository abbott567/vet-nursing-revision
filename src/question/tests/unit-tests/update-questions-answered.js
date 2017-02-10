const chai = require('chai');
const {updateQuestionsAnswered} = require('../../functions');

const expect = chai.expect;

describe('updateQuestionsAnswered(req, res)', () => {
  it('Should return true', () => {
    const req = {
      cookies: {},
      body: {
        id: ''
      }
    };
    const res = {
      cookie: () => {}
    };
    const result = updateQuestionsAnswered(req, res);
    expect(result).to.eql(true);
  });
});
