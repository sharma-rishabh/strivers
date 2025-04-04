const isEven = (number) => number % 2 === 0;
const noPadding = () => "";
const decrementingPaddingGenerator = (level, _, columns, style = " ") =>
  style.repeat(columns - level);
const incrementingPaddingGenerator = (level, _, __, style = " ") =>
  style.repeat(level - 1);
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
const extraWidthGenerator = (_, __, columns) => columns + 1;
const levelWidthGenerator = (level) => level;
const decrementingWidthGenerator = (level, _, columns) => columns - level + 1;
const triangleWidthGenerator = (level) => 2 * level - 1;
const invertedTriangleWidthGenerator = (level, _, columns) =>
  2 * (columns - level) + 1;

const solidRowGenerator = (width) => "*".repeat(width);
const hollowRowGenerator = (width, level) => {
  const isBoundingRow = level === 1 || level === width;
  return !isBoundingRow ? "*" + " ".repeat(width - 2) + "*" : "*".repeat(width);
};

const numberedSquareRowGenerator = (width, level) => {
  const halfwayPoint = Math.ceil(width / 2);
  const isTillHalfwayPoint = level <= halfwayPoint;
  const centerDigit =
    (isTillHalfwayPoint ? halfwayPoint - level : level - halfwayPoint) + 1;

  const center = (centerDigit + "").repeat(centerDigit * 2 - 1);
  return new Array(halfwayPoint - centerDigit).fill(0).reduce((acc, _, i) => {
    const padding = centerDigit + i + 1 + "";
    return padding + acc + padding;
  }, center);
};

const getCycler = (starting, fillers) => {
  let nextIndex = starting;
  return () => {
    const currentFillerIndex = nextIndex;
    nextIndex = (currentFillerIndex + 1) % fillers.length;
    return fillers[currentFillerIndex];
  };
};
const binaryRowGenerator = (width) => {
  const starting = isEven(width) ? 0 : 1;
  const cycler = getCycler(starting, [0, 1]);
  return new Array(width)
    .fill(0)
    .map(() => cycler() + "")
    .join("");
};

const numberedStringGenerator = (width, starting) => {
  return new Array(width)
    .fill(0)
    .map((_, index) => starting + index + 1)
    .join("");
};

const numberedRowGenerator = (width) => {
  return numberedStringGenerator(width, 0);
};

const continuousNumberedRowGenerator = (width) => {
  const prevEnding = new Array(width - 1).fill(0).reduce((acc, _, i) => {
    return acc + width - (i + 1);
  }, 0);
  return numberedStringGenerator(width, prevEnding);
};

const alphabeticalRowGenerator = (width) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const cycler = getCycler(0, alphabets);
  return new Array(width)
    .fill(0)
    .map(() => cycler())
    .join("");
};
const backwardsAlphabeticalRowGenerator = (width, level, height) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .slice(height - level, height);
  const cycler = getCycler(0, alphabets);
  return new Array(width)
    .fill(0)
    .map(() => cycler())
    .join("");
};
const mirroredAlphabeticalRowGenerator = (width) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const cycler = getCycler(0, alphabets);
  const alphabetCount = Math.ceil(width / 2);
  const rowFirstHalf = new Array(alphabetCount)
    .fill(0)
    .map(() => cycler())
    .join("");
  return rowFirstHalf + mirrorText(rowFirstHalf.slice(0, -1));
};

const repeatedAlphabeticalRowGenerator = (width) => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabets[width - 1].repeat(width);
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

const diamondImprintRowGenerator = (width, level, height) => {
  const halfwayPoint = height / 2;
  const isTillHalfwayPoint = level <= halfwayPoint;
  const imprintLength = isTillHalfwayPoint
    ? (level - 1) * 2
    : (height - level) * 2;
  const paddingLength = (width - imprintLength) / 2;
  const row = "*".repeat(paddingLength) + " ".repeat(imprintLength);
  return row + "*".repeat(height - row.length);
};

const blackWidowRowGenerator = (width, level) => {
  const halfwayPoint = Math.ceil(width / 2);
  const isTillHalfwayPoint = level <= halfwayPoint;
  const imprintLength = isTillHalfwayPoint
    ? width - level * 2
    : (level - halfwayPoint) * 2;
  const paddingLength = (width - imprintLength) / 2;
  const row = "*".repeat(paddingLength) + " ".repeat(imprintLength);
  return row + "*".repeat(width - row.length);
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
      return padding + rowGenerator(width, level + 1, rows, columns);
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
  continuousNumberedRowGenerator,
  alphabeticalRowGenerator,
  repeatedAlphabeticalRowGenerator,
  mirroredAlphabeticalRowGenerator,
  backwardsAlphabeticalRowGenerator,
  diamondImprintRowGenerator,
  blackWidowRowGenerator,
  extraWidthGenerator,
  hollowRowGenerator,
  numberedSquareRowGenerator,
};
