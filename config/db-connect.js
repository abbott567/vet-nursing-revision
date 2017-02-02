module.exports = env => {
  if (env === 'development' || 'test') {
    return 'mongodb://localhost/vet-questions';
  }
};
