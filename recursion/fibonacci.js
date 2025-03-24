const fibonacci = (limit) => {
  if (limit <= 1) {
    return [0, 1];
  }
  const series = fibonacci(limit - 1);
  return [...series, series[series.length - 2] + series[series.length - 1]];
};

console.log(fibonacci(8));
