const countDigits = (number) => {
  return ("" + number).length;
};

const reverseNumber = (number) => {
  if (number < 10) return number;
  const reversed = reverseNumber(Math.floor(number / 10));
  const numOfDigits = countDigits(number);
  return (number % 10) * Math.pow(10, numOfDigits - 1) + reversed;
};

module.exports = {
  countDigits,
  reverseNumber,
};
