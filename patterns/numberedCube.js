const {
  patternGenerator,
  maxWidthGenerator,
  numberedSquareRowGenerator,
  noPadding,
} = require("./library");

const numberedCube = (rows, columns) => {
  return patternGenerator(
    rows,
    columns,
    noPadding,
    maxWidthGenerator,
    numberedSquareRowGenerator
  );
};

console.log(numberedCube(7,7));
