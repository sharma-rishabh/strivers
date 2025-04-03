const sum = (arr) => arr.reduce((a, b) => a + b, 0);

const kadaneAlgo = (arr) => {
  return arr.reduce(
    ([max, probables], curr) => {
      const currSum = sum(probables) + curr;
      const maxSum = sum(max);
      if (currSum > maxSum) {
        return [
          [...probables, curr],
          [...probables, curr],
        ];
      }
      if (currSum < 0) {
        return [max, []];
      }
      return [max, [...probables, curr]];
    },
    [[], []]
  )[0];
};

console.log(kadaneAlgo([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
