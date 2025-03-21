const {
  patternGenerator,
  maxWidthGenerator,
  hollowRowGenerator,
  noPadding,
} = require("./library");

const filledRectangle = (rows, columns) => {
  return patternGenerator(
    rows,
    columns,
    noPadding,
    maxWidthGenerator,
    hollowRowGenerator
  );
};

console.log(filledRectangle(5, 5));
