const Browser = require('zombie');

describe('GET(/question)', () => {
  const browser = new Browser();
  before(done => {
    browser.visit('http://localhost:4000/cat/58931f61a7a8837ecf85a844/question', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});
