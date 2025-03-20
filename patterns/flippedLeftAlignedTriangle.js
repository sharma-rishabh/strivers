const {
  patternGenerator,
  decrementingWidthGenerator,
  solidRowGenerator,
  noPadding,
} = require("./library");

const flippedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    decrementingWidthGenerator,
    solidRowGenerator
  );
};

console.log(flippedLeftAlignedTriangle(5));
