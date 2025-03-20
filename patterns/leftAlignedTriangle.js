const {
  patternGenerator,
  levelWidthGenerator,
  solidRowGenerator,
  noPadding,
} = require("./library");

const leftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    levelWidthGenerator,
    solidRowGenerator
  );
};

console.log(leftAlignedTriangle(5));
