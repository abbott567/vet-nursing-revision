/* eslint-disable import/no-unassigned-import */
process.env.NODE_ENV = 'test';
require('../bin/www');

describe('Unit Tests', () => {
  require('./add-question/unit-tests/build-question');
  require('./common/unit-tests/get-categories');
  require('./common/unit-tests/random-num');
  require('./common/unit-tests/shuffle');
  require('./question/unit-tests/get-question');
});

describe('Validation Tests', () => {
  require('./add-category/validation-tests/get');
  require('./question/validation-tests/get');
});

/* eslint-enable import/no-unassigned-import */
