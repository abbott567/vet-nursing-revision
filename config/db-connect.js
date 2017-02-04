const mongoose = require('mongoose');

module.exports = () => {
  if (process.env.NODE_ENV === 'development' || 'test') {
    return mongoose.connect('mongodb://localhost/vet-questions');
  }
  return mongoose.connect(process.env.MONGODB_URI);
};
