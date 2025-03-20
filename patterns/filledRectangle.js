const {
  patternGenerator,
  maxWidthGenerator,
  solidRowGenerator,
  noPadding,
} = require("./library");

const filledRectangle = (rows, columns) => {
  return patternGenerator(
    rows,
    columns,
    noPadding,
    maxWidthGenerator,
    solidRowGenerator
  );
};

console.log(filledRectangle(5, 5));
