const addN = (number) => {
  if (number <= 0) {
    return 0;
  }
  return number + addN(number - 1);
};

console.log(addN(5));
