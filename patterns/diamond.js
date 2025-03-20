const {
  patternGenerator,
  diamondWidthGenerator,
  solidRowGenerator,
  diamondPaddingGenerator,
} = require("./library");

const diamond = (height) => {
  return patternGenerator(
    height,
    height,
    diamondPaddingGenerator,
    diamondWidthGenerator,
    solidRowGenerator
  );
};

console.log(diamond(6));
