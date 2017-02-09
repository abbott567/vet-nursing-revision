/* eslint-disable import/no-unassigned-import */
process.env.NODE_ENV = 'test';
require('../bin/www');

describe('Validation Tests', () => {
  require('./add-category/validation-tests/get');
  require('./add-question/validation-tests/get');
  require('./question/validation-tests/get');
  require('./reset/validation-tests/get');
  require('./results/validation-tests/get');
});

describe('Unit Tests', () => {
  require('./add-question/unit-tests/build-question');
  require('./common/unit-tests/get-categories');
  require('./common/unit-tests/random-num');
  require('./common/unit-tests/shuffle');
  require('./question/unit-tests/get-question');
  require('./results/unit-tests/get-results');
});

/* eslint-enable import/no-unassigned-import */
