const recursiveBubbleSort = (arr, unsortedElements) => {
  if (unsortedElements === 1) return arr;
  for (let j = 0; j <= unsortedElements - 2; j++) {
    if (arr[j] >= arr[j + 1]) {
      const currValue = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = currValue;
    }
  }
  return recursiveBubbleSort(arr, unsortedElements - 1);
};

console.log(recursiveBubbleSort([3, 4, 5, 2, 1], 5));
