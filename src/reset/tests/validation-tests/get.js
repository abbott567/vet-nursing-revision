const Browser = require('zombie');

describe('GET(/reset)', () => {
  const browser = new Browser();
  before(done => {
    browser.visit('http://localhost:4000/reset', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});
