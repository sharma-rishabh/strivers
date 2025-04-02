const majorityElement = (arr) => {
  let contender;
  let count = 0;
  for (ele of arr) {
    if (count === 0) {
      contender = ele;
    }
    if (contender === ele) {
      count++;
    } else {
      count--;
    }
  }
  return contender;
};

console.log(majorityElement([1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2]));
