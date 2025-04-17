const pascal = (height) => {
  const rows = [[1], [1, 1]];
  while (rows.length < height) {
    const prevRow = rows[rows.length - 1];
    const nextRow = [];
    for (let i = 0; i <= prevRow.length; i++) {
      if (i === 0 || i === prevRow.length) {
        nextRow.push(prevRow[0]);
      } else {
        const nextEle = prevRow[i - 1] + prevRow[i];
        nextRow.push(nextEle);
      }
    }
    rows.push(nextRow);
  }
  return rows;
};

console.log(pascal(5));
