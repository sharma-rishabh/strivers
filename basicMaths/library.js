const countDigits = (number) => {
  return ("" + number).length;
};

const reverseNumber = (number) => {
  if (number < 10) return number;
  const reversed = reverseNumber(Math.floor(number / 10));
  const numOfDigits = countDigits(number);
  return (number % 10) * Math.pow(10, numOfDigits - 1) + reversed;
};

const pallindrome = (number) => {
  return reverseNumber(number) === number;
};

const gcd = (number1, number2) => {
  if (number1 === 0 || number2 === 0) {
    return number1 || number2;
  }
  return number1 >= number2
    ? gcd(number1 - number2, number2)
    : gcd(number2 - number1, number1);
};

const splitDigits = (number) => {
  return (number + "").split("").map((digit) => +digit);
};

const armstrongNumber = (number) => {
  const digits = splitDigits(number);
  return (
    number ===
    digits.reduce((acc, digit) => {
      return acc + Math.pow(digit, digits.length);
    }, 0)
  );
};

const divisors = (number) => {
  const root = Math.floor(Math.sqrt(number));
  return new Array(root).fill(0).reduce((acc, _, index) => {
    const divisor = index + 1;
    if (number % divisor === 0) {
      const quotient = number / divisor;
      const newDivisors =
        quotient === divisor ? [quotient] : [quotient, divisor];
      return acc.concat(newDivisors);
    }
    return acc;
  }, []);
};

const isPrime = (number) => {
  return divisors(number).length === 2;
};
module.exports = {
  countDigits,
  reverseNumber,
  pallindrome,
  gcd,
  armstrongNumber,
  divisors,
  isPrime,
};
