// x(arr1, arr2) -> [orderedArray]
// f(arr) -> return arr.length === 1?arr:x(f(halfArray), f(secondHalfArray))

const merge = (arr1, arr2) => {
  const mergedArray = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (mergedArray.length < arr1.length + arr2.length) {
    if (
      arr1Index < arr1.length &&
      (arr1[arr1Index] <= arr2[arr2Index] || arr2Index === arr2.length)
    ) {
      mergedArray.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      mergedArray.push(arr2[arr2Index]);
      arr2Index++;
    }
  }
  return mergedArray;
};
const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.ceil(arr.length / 2);
  const sortedArr1 = mergeSort(arr.slice(0, middle));
  const sortedArr2 = mergeSort(arr.slice(middle));
  const mergedArray = merge(sortedArr1, sortedArr2);
  return mergedArray;
};

console.log(mergeSort([6,6,6,6,5,1,23]));
