module.exports = {
  getUrl: req => {
    if (req.query.question === 'true') {
      return '/add-question';
    } else if (req.query.category === 'true') {
      return '/add-category';
    }
    return '/';
  }
};
