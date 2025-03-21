const isEven = (number) => number % 2 === 0;
const noPadding = () => "";
const decrementingPaddingGenerator = (level, _, columns) =>
  " ".repeat(columns - level);
const incrementingPaddingGenerator = (level) => " ".repeat(level - 1);
const diamondPaddingGenerator = (level, height) => {
  const halfwayPoint = Math.ceil(height / 2);
  return level <= halfwayPoint
    ? decrementingPaddingGenerator(level, halfwayPoint, halfwayPoint)
    : incrementingPaddingGenerator(level - halfwayPoint);
};

const diamondWidthGenerator = (level, height) => {
  const halfwayPoint = Math.ceil(height / 2);
  return level <= halfwayPoint
    ? triangleWidthGenerator(level)
    : invertedTriangleWidthGenerator(level, height, height);
};

const arrowWidthGenerator = (level, height) => {
  const halfwayPoint = Math.ceil(height / 2);
  return level <= halfwayPoint
    ? levelWidthGenerator(level)
    : decrementingWidthGenerator(level, height, height);
};
const maxWidthGenerator = (_, __, columns) => columns;
const levelWidthGenerator = (level) => level;
const decrementingWidthGenerator = (level, _, columns) => columns - level + 1;
const triangleWidthGenerator = (level) => 2 * level - 1;
const invertedTriangleWidthGenerator = (level, _, columns) =>
  2 * (columns - level) + 1;

const solidRowGenerator = (width) => "*".repeat(width);

const binaryRowGenerator = (width) => {
  const getCycler = (starting, fillers) => {
    let nextIndex = starting;
    return () => {
      const currentFillerIndex = nextIndex;
      nextIndex = (currentFillerIndex + 1) % fillers.length;
      return fillers[currentFillerIndex];
    };
  };
  const starting = isEven(width) ? 0 : 1;
  const cycler = getCycler(starting, [0, 1]);
  return new Array(width)
    .fill(0)
    .map(() => cycler() + "")
    .join("");
};

const numberedRowGenerator = (width) => {
  return new Array(width)
    .fill(0)
    .map((_, index) => index + 1)
    .join("");
};

const addRightPadding = (string, totalWidth) => {
  return string + " ".repeat(totalWidth - string.length);
};

const mirrorText = (text) => {
  return text.split("").reverse().join("");
};

const mirroredNumberedRowGenerator = (width, level) => {
  const numbers = numberedRowGenerator(level);
  const numbersWithRightPadding = addRightPadding(numbers, width);
  return numbersWithRightPadding + mirrorText(numbersWithRightPadding);
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
      return padding + rowGenerator(width, level+1);
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
  diamondWidthGenerator,
  diamondPaddingGenerator,
  arrowWidthGenerator,
  binaryRowGenerator,
  mirroredNumberedRowGenerator,
};
