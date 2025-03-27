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

const leftShiftFirstNElements = (arr, n) => {
  for (let i = 0; i < n; i++) {
    arr.push(arr.shift());
  }
  return arr;
};

module.exports = {
  biggestInArray,
  smallestInArray,
  leftShiftFirstNElements,
};
