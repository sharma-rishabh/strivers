const {
  patternGenerator,
  maxWidthGenerator,
  mirroredNumberedRowGenerator,
  noPadding,
} = require("./library");

const mirroredNumberedLeftAlignedTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    maxWidthGenerator,
    mirroredNumberedRowGenerator
  );
};

console.log(mirroredNumberedLeftAlignedTriangle(5));
