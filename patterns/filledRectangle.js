const {
  patternGenerator,
  maxWidthGenerator,
  solidRowGenerator,
} = require("./library");

const filledRectangle = (rows, columns) => {
  return patternGenerator(rows, columns, maxWidthGenerator, solidRowGenerator);
};

console.log(filledRectangle(5, 5));
