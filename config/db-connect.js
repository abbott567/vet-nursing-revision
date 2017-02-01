module.exports = env => {
  if (env === 'development') {
    return 'mongodb://localhost/vet-questions';
  }
};
