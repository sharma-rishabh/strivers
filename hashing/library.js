const { HashTable } = require("./HashTable");
const countOccurrences = (arr) => {
  const table = new HashTable(arr.length);
  arr.forEach((element) => {
    const occurrences = table.search(element) || 0;
    table.insert(element, occurrences + 1);
  });
  return table.toArray();
};

module.exports = {
  countOccurrences,
};
