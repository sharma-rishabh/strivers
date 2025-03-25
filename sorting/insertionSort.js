const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const currValue = arr[i];
    let replacementIndex = i;
    for (let j = i; j >= 0; j--) {
      if (currValue <= arr[j]) {
        arr[replacementIndex] = arr[j];
        arr[j] = currValue;
        replacementIndex = j;
      }
    }
  }
  return arr;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
