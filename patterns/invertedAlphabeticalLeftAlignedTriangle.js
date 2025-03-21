const {
  patternGenerator,
  decrementingWidthGenerator,
  alphabeticalRowGenerator,
  noPadding,
} = require("./library");

const invertedAlphabeticalLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    decrementingWidthGenerator,
    alphabeticalRowGenerator
  );
};

console.log(invertedAlphabeticalLeftAlignedTriangle(5));
