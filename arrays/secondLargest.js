const { biggestInArray } = require("./library");
const secondLargest = (arr) => {
  const largest = biggestInArray(arr)
  let secondLargest = -Infinity
  for (element of arr) {
    if (element < largest && element > secondLargest) {
      secondLargest = element
    }
  }
  return secondLargest
};

console.log(secondLargest([-1, -2, -3, -4, -5]));
