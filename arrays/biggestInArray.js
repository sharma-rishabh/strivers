const biggestInArray = (arr) => {
  return arr.reduce((biggest, current) => {
    return current > biggest ? current : biggest;
  }, -Infinity);
};

console.log(biggestInArray([-1, -2, -3, -4, -5]));
