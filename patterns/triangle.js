const {
  patternGenerator,
  triangleWidthGenerator,
  solidRowGenerator,
  decrementingPaddingGenerator,
} = require("./library");

const triangle = (height) => {
  return patternGenerator(
    height,
    height,
    decrementingPaddingGenerator,
    triangleWidthGenerator,
    solidRowGenerator
  );
};

console.log(triangle(5));
