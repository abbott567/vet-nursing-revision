const Browser = require('zombie');

describe('GET(/results - with cookies)', () => {
  const browser = new Browser();
  before(done => {
    browser.setCookie({name: 'incorrect', value: 'j%3A%5B%2258976ca7a30eef5fe8ea585e%22%2C%2258926ca7a30eef5fe8ea585e%22%5D'});
    browser.setCookie({name: 'correct', value: 'j%3A%5B%225893343590990a898083f0f3%22%5D'});
    browser.visit('http://localhost:4000/results', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});

describe('GET(/results - without cookies)', () => {
  const browser = new Browser();
  before(done => {
    browser.visit('http://localhost:4000/results', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});
