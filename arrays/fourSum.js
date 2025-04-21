const fourSum = (arr) => {
  arr.sort((a, b) => a - b);
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let k = j + 1;
      let l = arr.length - 1;
      while (k < l) {
        if (arr[i] + arr[j] + arr[k] + arr[l] === 0) {
          sums.push([arr[i], arr[j], arr[k], arr[l]]);
          k++;
          l--;
        } else if (arr[i] + arr[j] + arr[k] + arr[l] < 0) {
          k++;
        } else {
          l--;
        }
      }
    }
  }
  return sums;
};

console.log(fourSum([1, 0, -1, 0, -2, 2]));
