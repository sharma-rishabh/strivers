const {
  patternGenerator,
  levelWidthGenerator,
  binaryRowGenerator,
  noPadding,
} = require("./library");

const binaryLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    binaryRowGenerator
  );
};

console.log(binaryLeftAlignedTriangle(5));
