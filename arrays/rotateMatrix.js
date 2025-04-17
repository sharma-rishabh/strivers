const rotateMatrix = (matrix) => {
  const rotatedMatrix = new Array(matrix[0].length).fill(0).map(() => []);
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      rotatedMatrix[columnIndex].unshift(row[columnIndex]);
    }
  }
  return rotatedMatrix;
};

console.log(
  rotateMatrix([
    [5, 1, 9],
    [2, 4, 8],
    [13, 3, 6],
    [15, 14, 12],
  ])
);
