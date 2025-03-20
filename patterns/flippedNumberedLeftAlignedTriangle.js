const {
  patternGenerator,
  decrementingWidthGenerator,
  numberedRowGenerator,
  noPadding,
} = require("./library");

const flippedNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    decrementingWidthGenerator,
    numberedRowGenerator
  );
};

console.log(flippedNumberedLeftAlignedTriangle(5));
