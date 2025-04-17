const twoSum = (arr, sum) => {
  arr.sort((x, y) => x - y);
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < arr.length || rightIndex > 0) {
    const currSum = arr[leftIndex] + arr[rightIndex];
    if (currSum === sum) return [arr[leftIndex], arr[rightIndex]];
    if (currSum < sum) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }
  return [-1, 1];
};

console.log(twoSum([2, 5, 5, 8, 1], 14));
