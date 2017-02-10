/* eslint-disable import/no-unassigned-import */
process.env.NODE_ENV = 'test';
require('../bin/www');

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
  require('../src/question/tests/unit-tests/get-question');
  require('../src/results/tests/unit-tests/get-results');
});

/* eslint-enable import/no-unassigned-import */
