const stockBuySell = (prices) => {
  return prices.reduce(
    ([buyPrice, profit], currPrice) => {
      if (currPrice < buyPrice) {
        return [currPrice, profit];
      }
      if (currPrice - buyPrice > profit) {
        return [buyPrice, currPrice - buyPrice];
      }
      return [buyPrice, profit];
    },
    [Infinity, 0]
  )[1];
};

console.log(stockBuySell([7, 1, 5, 3, 6, 4]));
