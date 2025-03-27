const isSorted = (arr) => {
  return arr.reduce(
    ([prev, isSorted], current) => {
      return current >= prev && isSorted ? [current, true] : [current, false];
    },
    [-Infinity, true]
  )[1];
};

console.log(isSorted([1, 2, 4, 3, 4, 5]));
