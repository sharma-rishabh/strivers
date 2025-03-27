const linearSearch = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ele) {
      return i;
    }
  }
  return Infinity;
};

console.log(linearSearch([1,2,2,3,3,4,5], 4));
