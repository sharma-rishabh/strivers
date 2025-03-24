const printReverseNumbers = (from, to) => {
  if (from > to) {
    return;
  }
  console.log(to);
  return printReverseNumbers(from, to - 1);
};

printReverseNumbers(1, 5);
