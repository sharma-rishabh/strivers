const secondLargest = (arr) => {
  for (element of arr) {
    let largerThanElement = 0;
    for (ele of arr) {
      if (ele > element) {
        largerThanElement++;
      }
    }
    if (largerThanElement === 1) {
      return element
    }
  }
};

console.log(secondLargest([-1, -2, -3, -4, -5]));
