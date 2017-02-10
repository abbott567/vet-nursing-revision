/* eslint-disable import/no-unassigned-import */
process.env.NODE_ENV = 'test';
const chai = require('chai');
require('../bin/www');

const expect = chai.expect;

describe('Validation Tests', () => {
  require('../src/add-category/tests/validation-tests/get');
  require('../src/add-question/tests/validation-tests/get');
  require('../src/question/tests/validation-tests/get');
  require('../src/reset/tests/validation-tests/get');
  require('../src/results/tests/validation-tests/get');
});

describe('Unit Tests', () => {
  require('../src/add-question/tests/unit-tests/build-question');
  require('../src/common/tests/unit-tests/get-categories');
  require('../src/common/tests/unit-tests/random-num');
  require('../src/common/tests/unit-tests/shuffle');
  require('../src/question/tests/unit-tests/update-totals');
  require('../src/results/tests/unit-tests/get-results');
  require('../src/question/tests/unit-tests/get-question');
  require('../src/question/tests/unit-tests/update-questions-answered');
  require('../src/verify/tests/unit-tests/get-url');
});

describe('Production DB connect', () => {
  it('Should connect to heroku', () => {
    const db = require('../config/db-connect')();
    expect(db).to.not.eql('mongodb://localhost/vet-questions');
  });
});
/* eslint-enable import/no-unassigned-import */
