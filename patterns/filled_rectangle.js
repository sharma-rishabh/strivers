const filled_rectangle = (row, column) => {
  return new Array(row)
    .fill(0)
    .map(() => "*".repeat(column))
    .join("\n");
};

console.log(filled_rectangle(5,5));
