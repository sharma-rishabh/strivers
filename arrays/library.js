const biggestInArray = (arr) => {
  return arr.reduce((biggest, current) => {
    return current > biggest ? current : biggest;
  }, -Infinity);
};

module.exports = {
  biggestInArray,
};
