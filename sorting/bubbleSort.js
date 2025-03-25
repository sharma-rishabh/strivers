const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j] >= arr[j + 1]) {
        const currValue = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = currValue;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([3, 4, 5, 2, 1]));
