const {
  patternGenerator,
  triangleWidthGenerator,
  mirroredAlphabeticalRowGenerator,
  decrementingPaddingGenerator,
} = require("./library");

const mirroredAlphabeticalTriangle = (height) => {
  return patternGenerator(
    height,
    height,
    decrementingPaddingGenerator,
    triangleWidthGenerator,
    mirroredAlphabeticalRowGenerator
  );
};

console.log(mirroredAlphabeticalTriangle(5));
