const largestSubZero = (arr) => {
  const sums = {};
  let maxSize = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      maxSize = i + 1;
    }
    if (sums[sum]) {
      const diff = i - sums[sum];
      maxSize = Math.max(diff, i);
    } else {
      sums[sum] = i;
    }
  }
  return maxSize;
};

console.log(largestSubZero([9, -3, 3, -1, 6, -5]));
