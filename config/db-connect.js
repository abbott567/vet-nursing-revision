module.exports = env => {
  if (env === 'development' || env === 'test') {
    return 'mongodb://localhost/vet-questions';
  }
  return env.MONGODB_URI;
};
