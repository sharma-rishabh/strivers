const {
  patternGenerator,
  invertedTriangleWidthGenerator,
  solidRowGenerator,
  incrementingPaddingGenerator,
} = require("./library");

const flippedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    incrementingPaddingGenerator,
    invertedTriangleWidthGenerator,
    solidRowGenerator
  );
};

console.log(flippedTriangle(5));
