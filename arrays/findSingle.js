const countOccurrences = (arr, ele) => {
  return arr.reduce((count, curr) => {
    return curr === ele ? count + 1 : count;
  }, 0);
};
const findSingle = (arr) => {
  return arr.filter((ele) => {
    return countOccurrences(arr, ele) === 1
  })[0];
};

console.log(findSingle([4, 2, 1, 2, 1, 2, 1]));
