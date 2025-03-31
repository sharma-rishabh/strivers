const missingNumber = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const curr = arr[i];
    const next = arr[i + 1];
    if (next - curr !== 1) {
      return curr + 1;
    }
  }
  return 0
};

console.log(missingNumber([1, 2,3, 4,6]));
