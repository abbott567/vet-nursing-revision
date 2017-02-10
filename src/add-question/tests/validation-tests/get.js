const Browser = require('zombie');

describe('GET(/add-question) - without cookie set', () => {
  const browser = new Browser();
  before(done => {
    browser.visit('http://localhost:4000/add-question', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});

describe('GET(/add-question) - with cookie set', () => {
  const browser = new Browser();
  before(done => {
    browser.setCookie({name: 'verified', value: 'true'});
    browser.visit('http://localhost:4000/add-question', done);
  });

  it('should return a response of 200', done => {
    browser.assert.status(200);
    done();
  });
});
