module.exports = {
  randomNum: (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  },

  shuffle: array => {
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      const temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },

  getCategories: Category => {
    return Category.find({})
    .then(results => {
      return results;
    })
    .catch(err => {
      return err;
    });
  }
};
