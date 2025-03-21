const {
  patternGenerator,
  maxWidthGenerator,
  diamondImprintRowGenerator,
  noPadding,
} = require("./library");

const diamondImprint = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    maxWidthGenerator,
    diamondImprintRowGenerator
  );
};

console.log(diamondImprint(10));
