var stringUtil = {
  firstWord: function(text) {
    return text.split(" ")[0];
    // tex.split(" "); split on the spaces
    // [0] this will return the first word in the string provided
  },
  nthWord: function(text, i) {
    return text.split(" ")[i - 1];
    // tex.split(" "); split on the spaces
    // [i - 1] this will return the nthWord word in the string provided
  }
};

module.exports = stringUtil;
