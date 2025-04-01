const sum = (arr) => {
  return arr.reduce((sum, curr) => sum + curr);
};
const largestSubArray = (arr, number) => {
  return arr.reduce(
    ([largest, curr], ele) => {
      curr.push(ele);
      while (sum(curr) > number) {
        curr.shift();
      }
      if (sum(curr) === number) {
        return curr.length > largest.length ? [curr, curr] : [largest, curr];
      }
      return [largest, curr];
    },
    [[], []]
  );
};

console.log(largestSubArray([2, 3, 5, 2, 1, 1, 6], 10));
