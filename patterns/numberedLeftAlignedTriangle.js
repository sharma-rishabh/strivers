const {
  patternGenerator,
  levelWidthGenerator,
  numberedRowGenerator,
} = require("./library");

const numberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    levelWidthGenerator,
    numberedRowGenerator
  );
};

console.log(numberedLeftAlignedTriangle(5));
