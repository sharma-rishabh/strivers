const biggestInArray = (arr) => {
  return arr.reduce((biggest, current) => {
    return current > biggest ? current : biggest;
  }, -Infinity);
};
const smallestInArray = (arr) => {
  return arr.reduce((smallest, current) => {
    return current < smallest ? current : smallest;
  }, Infinity);
};

module.exports = {
  biggestInArray,
  smallestInArray,
};
