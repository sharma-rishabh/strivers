const {
  patternGenerator,
  levelWidthGenerator,
  repeatedNumberedRowGenerator,
} = require("./library");

const repeatedNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    levelWidthGenerator,
    repeatedNumberedRowGenerator
  );
};

console.log(repeatedNumberedLeftAlignedTriangle(5));
