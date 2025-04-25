const findMissingNumber = (arr) => {
  const occ = {};
  let missing;
  let double;
  for (let ele of arr) {
    if (occ[ele] !== undefined) {
      occ[ele] = occ[ele] + 1;
    } else {
      occ[ele] = 1;
    }
  }
  for (let i = 1; i <= arr.length; i++) {
    if (occ[i] === undefined) {
      missing = i;
    }
    if (occ[i] > 1) {
      double = i;
    }
  }
  return [missing, double];
};

console.log(findMissingNumber([3, 1, 2, 5, 4, 6, 7, 5]));
