const { smallestInArray } = require("./library");
const secondLargest = (arr) => {
  const smallest = smallestInArray(arr);
  let secondSmallest = Infinity;
  for (let element of arr) {
    if (element > smallest && element < secondSmallest) {
      secondSmallest = element;
    }
  }
  return secondSmallest;
};

console.log(secondLargest([-1, -2, -3, -4, -5]));
