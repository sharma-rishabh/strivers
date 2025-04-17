const threeSum = (arr) => {
  arr.sort((a, b) => a - b);
  const sums = [];
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let middleIndex = 1;
  while (leftIndex < rightIndex && middleIndex < rightIndex) {
    if (arr[leftIndex] + arr[middleIndex] + arr[rightIndex] < 0) {
      middleIndex++;
    }
    if (arr[leftIndex] + arr[middleIndex] + arr[rightIndex] < 0) {
      leftIndex++;
    }
    if (arr[leftIndex] + arr[middleIndex] + arr[rightIndex] > 0) {
      rightIndex--;
    }
    if (arr[leftIndex] + arr[middleIndex] + arr[rightIndex] === 0) {
      sums.push([arr[leftIndex], arr[middleIndex], arr[rightIndex]]);
      middleIndex++;
    }
  }
  return sums;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
