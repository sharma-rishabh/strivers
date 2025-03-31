const consecutiveOnes = (arr) => {
  let maxCount = 0;
  let currCount = 0;
  for (let ele of arr) {
    if (ele === 1) {
      currCount++;
    }
    if (ele !== 1) {
      maxCount = maxCount > currCount ? maxCount : currCount;
      currCount = 0
    }
  }
  return maxCount;
};

console.log(consecutiveOnes([1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]));
