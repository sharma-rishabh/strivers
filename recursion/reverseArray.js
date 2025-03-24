const reverseArray = (array) => {
  return array.length <= 0 ? array : [array.pop(), ...reverseArray(array)];
};

console.log(reverseArray([1, 2, 3, 4, 5]));
