const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    let k = arr.length - 1;
    while (j < k) {
      if (arr[i] + arr[j] + arr[k] === 0) {
        sums.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      } else if (arr[i] + arr[j] + arr[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return sums;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
