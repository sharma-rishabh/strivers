const threeSum = (arr) => {
  const sums = [];
  for (let i = 0; i < arr.length - 2; i++) {
    const a = arr[i];
    for (let j = i + 1; j < arr.length - 1; j++) {
      const b = arr[j];
      for (let k = j + 1; k < arr.length; k++) {
        const c = arr[k];
        if (a + b + c === 0) {
          sums.push([a, b, c]);
        }
      }
    }
  }
  return sums;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
