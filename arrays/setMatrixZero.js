const setMatrixZero = (matrix) => {
  const rows = [];
  const columns = [];
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const col = row[columnIndex];
      if (col === 0) {
        rows.push(rowIndex);
        columns.push(columnIndex);
      }
    }
  }
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    if (rows.find((ele) => ele === rowIndex) !== undefined) {
      matrix[rowIndex] = new Array(row.length).fill(0);
    }
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      if (columns.find((ele) => ele === columnIndex) !== undefined) {
        row[columnIndex] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  setMatrixZero([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
