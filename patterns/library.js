const maxWidthGenerator = (_, __, columns) => columns;
const levelWidthGenerator = (level, _, __) => level;

const solidRowGenerator = (width) => "*".repeat(width);

const numberedRowGenerator = (width) => {
  return new Array(width)
    .fill(0)
    .map((_, index) => index + 1)
    .join("");
};

const repeatedNumberedRowGenerator = (width) => (width + "").repeat(width);

const patternGenerator = (rows, columns, widthGenerator, rowGenerator) => {
  return new Array(rows)
    .fill(0)
    .map((_, level) => {
      const width = widthGenerator(level + 1, rows, columns);
      return rowGenerator(width);
    })
    .join("\n");
};

module.exports = {
  patternGenerator,
  maxWidthGenerator,
  levelWidthGenerator,
  solidRowGenerator,
  numberedRowGenerator,
  repeatedNumberedRowGenerator,
};
