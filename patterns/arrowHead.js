const {
  patternGenerator,
  arrowWidthGenerator,
  solidRowGenerator,
  noPadding,
} = require("./library");

const arrowHead = (height) => {
  return patternGenerator(
    height,
    height,
    noPadding,
    arrowWidthGenerator,
    solidRowGenerator
  );
};

console.log(arrowHead(5));
