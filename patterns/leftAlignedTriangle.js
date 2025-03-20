const leftAlignedTriangle = (height) => {
  return new Array(height)
    .fill(0)
    .map((_, i) => "*".repeat(i + 1))
    .join("\n");
};

console.log(leftAlignedTriangle(5))