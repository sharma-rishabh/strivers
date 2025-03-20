const maxWidthGenerator = (_, __, columns) => columns;
const levelWidthGenerator = (level, _, __) => level;

const solidRowGenerator = (width) => "*".repeat(width);

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
};
