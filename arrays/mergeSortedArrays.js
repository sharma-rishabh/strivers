const mergeSortedArrays = (arr1, arr2) => {
  let largestPointer = 0;
  let smallestPointer = arr1.length - 1;
  while (arr1[smallestPointer] > arr2[largestPointer]) {
    console.log((arr1[smallestPointer], arr2[largestPointer]));
    const temp = arr1[smallestPointer];
    arr1[smallestPointer] = arr2[largestPointer];
    arr2[largestPointer] = temp;
    smallestPointer--;
    largestPointer++;
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  return [arr1, arr2];
};

console.log(mergeSortedArrays([1, 4, 8, 10], [2, 3, 9]));
