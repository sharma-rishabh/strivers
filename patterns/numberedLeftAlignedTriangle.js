const {
  patternGenerator,
  levelWidthGenerator,
  numberedRowGenerator,
  noPadding,
} = require("./library");

const numberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    numberedRowGenerator
  );
};

console.log(numberedLeftAlignedTriangle(5));
