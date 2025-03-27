const moveZeroToEnd = (arr) => {
  const [otherElements, zeros] = arr.reduce(
    ([otherElements, zeros], curr) => {
      curr === 0 ? zeros.push(curr) : otherElements.push(curr);
      return [otherElements, zeros];
    },
    [[], []]
  );
  return [...otherElements, ...zeros]
};

console.log(moveZeroToEnd([0, 1, 2, 0, 1, 2, 0, 3, 4, 0]));
