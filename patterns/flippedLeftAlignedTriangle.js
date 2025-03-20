const {
  patternGenerator,
  decrementingWidthGenerator,
  solidRowGenerator,
} = require("./library");

const flippedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    decrementingWidthGenerator,
    solidRowGenerator
  );
};

console.log(flippedLeftAlignedTriangle(5));
