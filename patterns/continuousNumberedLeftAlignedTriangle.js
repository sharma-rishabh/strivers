const {
  patternGenerator,
  levelWidthGenerator,
  continuousNumberedRowGenerator,
  noPadding,
} = require("./library");

const continuousNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    continuousNumberedRowGenerator
  );
};

console.log(continuousNumberedLeftAlignedTriangle(5));
