const noPadding = () => "";
const decrementingPaddingGenerator = (level, _, columns) =>
  " ".repeat(columns - level);
const incrementingPaddingGenerator = (level) => " ".repeat(level - 1);

const maxWidthGenerator = (_, __, columns) => columns;
const levelWidthGenerator = (level) => level;
const decrementingWidthGenerator = (level, _, columns) => columns - level + 1;
const triangleWidthGenerator = (level) => 2 * level - 1;
const invertedTriangleWidthGenerator = (level, rows) => 2 * (rows - level) + 1;

const solidRowGenerator = (width) => "*".repeat(width);

const numberedRowGenerator = (width) => {
  return new Array(width)
    .fill(0)
    .map((_, index) => index + 1)
    .join("");
};

const repeatedNumberedRowGenerator = (width) => (width + "").repeat(width);

const patternGenerator = (
  rows,
  columns,
  paddingGenerator,
  widthGenerator,
  rowGenerator
) => {
  return new Array(rows)
    .fill(0)
    .map((_, level) => {
      const padding = paddingGenerator(level + 1, rows, columns);
      const width = widthGenerator(level + 1, rows, columns);
      return padding + rowGenerator(width);
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
  decrementingWidthGenerator,
  noPadding,
  triangleWidthGenerator,
  decrementingPaddingGenerator,
  invertedTriangleWidthGenerator,
  incrementingPaddingGenerator,
};
