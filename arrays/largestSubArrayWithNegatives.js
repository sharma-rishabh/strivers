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
        return curr.length > largest.length
          ? [[...curr], [...curr]]
          : [[...largest], [...curr]];
      }
      return [largest, curr];
    },
    [[], []]
  )[0];
};

console.log(largestSubArray([-1, 1, 1, 0, 1], 1));
