const subarraysXOR = (arr, k) => {
  const xors = { 0: 1 };
  let count = 0;
  let totalXOR = 0;
  for (let i = 0; i < arr.length; i++) {
    totalXOR = totalXOR ^ arr[i];
    if (totalXOR === k) {
      count++
    } else if (xors[totalXOR ^ k] !== undefined) {
      count++;
    } else {
      xors[totalXOR] = 1;
    }
  }
  return count;
};

console.log(subarraysXOR([4, 2, 2, 6, 4], 6));
