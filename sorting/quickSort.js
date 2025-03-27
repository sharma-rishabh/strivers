const getpartitioner = (comparator) => (partedArrays, currentElement) => {
  currentElement < comparator
    ? partedArrays[0].push(currentElement)
    : partedArrays[1].push(currentElement);
  return partedArrays;
};
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  const pivotIndex = arr.length - 1;
  const pivot = arr[pivotIndex];
  const partitioner = getpartitioner(pivot);
  const partitions = arr.slice(0, arr.length - 1).reduce(partitioner, [[], []]);
  return [...quickSort(partitions[0]), pivot, ...quickSort(partitions[1])];
};

console.log(quickSort([3, 4, 5, 2, 1]));
