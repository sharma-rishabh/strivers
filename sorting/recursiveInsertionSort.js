const recursiveInsertionSort = (arr, unsortedElements) => {
  if (unsortedElements < 1) return arr;

  const sortedTillIndex = arr.length - unsortedElements;
  const currValue = arr[sortedTillIndex];
  let replacementIndex = sortedTillIndex;
  for (let j = sortedTillIndex; j >= 0; j--) {
    if (currValue <= arr[j]) {
      arr[replacementIndex] = arr[j];
      arr[j] = currValue;
      replacementIndex = j;
    }
  }
  return recursiveInsertionSort(arr, unsortedElements - 1);
};

console.log(recursiveInsertionSort([5, 4, 3, 2, 1], 5));
