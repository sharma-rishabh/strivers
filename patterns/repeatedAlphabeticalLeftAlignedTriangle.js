const {
  patternGenerator,
  levelWidthGenerator,
  repeatedAlphabeticalRowGenerator,
  noPadding,
} = require("./library");

const repeatedAlphabeticalLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    repeatedAlphabeticalRowGenerator
  );
};

console.log(repeatedAlphabeticalLeftAlignedTriangle(5));
