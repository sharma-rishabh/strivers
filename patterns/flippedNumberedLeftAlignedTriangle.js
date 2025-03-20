const {
  patternGenerator,
  decrementingWidthGenerator,
  numberedRowGenerator,
} = require("./library");

const flippedNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    decrementingWidthGenerator,
    numberedRowGenerator
  );
};

console.log(flippedNumberedLeftAlignedTriangle(5));
