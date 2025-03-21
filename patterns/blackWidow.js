const {
  patternGenerator,
  extraWidthGenerator,
  blackWidowRowGenerator,
  noPadding,
} = require("./library");

const blackWidow = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    extraWidthGenerator,
    blackWidowRowGenerator
  );
};

console.log(blackWidow(9));
