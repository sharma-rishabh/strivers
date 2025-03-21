const {
  patternGenerator,
  levelWidthGenerator,
  alphabeticalRowGenerator,
  noPadding,
} = require("./library");

const alphabeticalLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    alphabeticalRowGenerator
  );
};

console.log(alphabeticalLeftAlignedTriangle(5));
