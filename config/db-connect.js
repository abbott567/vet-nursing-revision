module.exports = env => {
  if (env === 'development' || env === 'test') {
    return 'mongodb://localhost/vet-questions';
  }
  return process.env.MONGODB_URI;
};
