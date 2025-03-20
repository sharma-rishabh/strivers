const {
  patternGenerator,
  levelWidthGenerator,
  repeatedNumberedRowGenerator,
  noPadding,
} = require("./library");

const repeatedNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    repeatedNumberedRowGenerator
  );
};

console.log(repeatedNumberedLeftAlignedTriangle(5));
