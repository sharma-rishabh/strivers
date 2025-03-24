const printNumbers = (from, to) => {
  if (from > to) {
    return;
  }
  console.log(from);
  return printNumbers(from + 1, to);
};

printNumbers(1, 5);
