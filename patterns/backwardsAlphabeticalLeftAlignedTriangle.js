const {
  patternGenerator,
  levelWidthGenerator,
  backwardsAlphabeticalRowGenerator,
  noPadding,
} = require("./library");

const backwardsAlphabeticalLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    backwardsAlphabeticalRowGenerator
  );
};

console.log(backwardsAlphabeticalLeftAlignedTriangle(5));
