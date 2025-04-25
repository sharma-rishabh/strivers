const mergeOverlapping = (arr) => {
  const merged = [arr[0]];
  arr.sort((a,b) => a[0] - b[0])
  for (let i = 1; i < arr.length; i++) {
    const last = merged[merged.length - 1];
    const curr = arr[i];
    if (curr[0] <= last[1]) {
      last[1] = Math.max(curr[1], last[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
};

console.log(
  mergeOverlapping([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
