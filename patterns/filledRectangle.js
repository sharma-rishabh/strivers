const filledRectangle = (row, column) => {
  return new Array(row)
    .fill(0)
    .map(() => "*".repeat(column))
    .join("\n");
};

console.log(filledRectangle(5,5));
