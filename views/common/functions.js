module.exports = {
  randomNum: (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  },

  shuffle(array) {
    for (let i = array.length; i; i--) {
      const n = Math.floor(Math.random() * i);
      [array[i - 1], array[n]] = [array[n], array[i - 1]];
    }
    return array;
  }
};
