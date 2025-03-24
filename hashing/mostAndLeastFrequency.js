const { countOccurrences } = require("./library");
const minMaxFreq = (arr) => {
  const occ = countOccurrences(arr);
  const maxOcc = occ.reduce(
    (acc, curr) => {
      if (curr[1] >= acc[1]) {
        return curr;
      }
      return acc;
    },
    [0, 0]
  );
  const minOcc = occ.reduce(
    (acc, curr) => {
      if (curr[1] <= acc[1]) {
        return curr;
      }
      return acc;
    },
    [Infinity, Infinity]
  );

  return [maxOcc, minOcc];
};

console.log(minMaxFreq([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4]));
