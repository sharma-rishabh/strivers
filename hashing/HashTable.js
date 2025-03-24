const divisors = (number) => {
  const root = Math.floor(Math.sqrt(number));
  return new Array(root).fill(0).reduce((acc, _, index) => {
    const divisor = index + 1;
    if (number % divisor === 0) {
      const quotient = number / divisor;
      const newDivisors =
        quotient === divisor ? [quotient] : [quotient, divisor];
      return acc.concat(newDivisors);
    }
    return acc;
  }, []);
};

const isPrime = (number) => {
  return divisors(number).length === 2;
};

const getNearestPrime = (number) => {
  const currentContender = number + 1;
  while (!isPrime(currentContender)) {
    currentContender++;
  }
  return currentContender;
};
const getHasher = (totalKeys) => {
  const prime = getNearestPrime(totalKeys);
  const a = Math.floor(prime * Math.random());
  const b = Math.floor((prime - 1) * Math.random()) + 1;
  return (key) => {
    return ((a * key + b) % prime) % totalKeys;
  };
};

class HashTable {
  hasher;
  table;
  graveyard = "";
  constructor(totalKeys) {
    this.hasher = getHasher(totalKeys);
    this.table = new Array(totalKeys).fill([]);
  }

  _entry(index, key) {
    return this.table[index].find(([currKey, _]) => currKey === key);
  }

  search(key) {
    const index = this.hasher(key);
    const entry = this._entry(index, key);
    if (entry.length === 0 || entry[1] === this.graveyard) {
      return;
    }
    return entry[1];
  }

  insert(key, value) {
    const index = this.hasher(key);
    const entry = this._entry(index, key);
    if (!entry) {
      this.table[index].push([key, value]);
      return;
    }
    entry[1] = value;
  }

  delete(key) {
    const index = this.hasher(key);
    const entry = this._entry(index, key);
    entry[1] = this.graveyard;
  }
}