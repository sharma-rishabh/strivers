const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= arr[minIndex]) {
        minIndex = j;
      }
    }
    const currValue = arr[i];
    arr[i] = arr[minIndex]
    arr[minIndex] = currValue;
  }
  return arr;
};

console.log(selectionSort([5,4,3,2,1]));
