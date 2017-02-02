process.env.NODE_ENV = 'test';
require('../bin/www'); // eslint-disable-line import/no-unassigned-import

// Common Tests
require('../views/common/tests').randomNum();
require('../views/common/tests').shuffle();

// Add Question
require('../views/add-question/tests').buildQuestion();

// View Question
require('../views/index/tests').getQuestion();
