const { HashTable } = require("./HashTable");
const countOccurrences = (arr) => {
  const set = new Set(arr);
  const table = new HashTable(arr.length);
  arr.forEach((element) => {
    const occurrences = table.search(element) || 0;
    table.insert(element, occurrences + 1);
  });
  return table.toArray();
};

console.log(countOccurrences([1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 4, 4, 4, 5]));
