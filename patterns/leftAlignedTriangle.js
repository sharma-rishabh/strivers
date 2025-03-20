const {
  patternGenerator,
  levelWidthGenerator,
  solidRowGenerator,
} = require("./library");

const leftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    levelWidthGenerator,
    solidRowGenerator
  );
};

console.log(leftAlignedTriangle(5));
