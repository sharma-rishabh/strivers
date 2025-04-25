const mergeOverlapping = (arr) => {
  const merged = [];
  let i = 0;
  while (i < arr.length) {
    const currMerge = arr[i];
    let j = i;
    while (
      arr[j + 1] !== undefined &&
      j < arr.length &&
      (arr[j + 1][0] <= currMerge[0] || arr[j + 1][0] <= currMerge[1])
    ) {
      const start = Math.min(arr[j +1][0], currMerge[0]);
      const end = Math.max(arr[j + 1][1], currMerge[1]);
      currMerge[0] = start;
      currMerge[1] = end;
      j++;
    }
    merged.push(currMerge)
    i = j + 1;
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
