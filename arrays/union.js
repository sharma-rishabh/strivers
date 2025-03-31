const union = (arr1, arr2) => {
  const union = [];
  for (ele of arr1) {
    if (arr2.includes(ele) && !union.includes(ele)) {
      union.push(ele);
    }
  }
  return union;
};

console.log(union([1, 2, 3, 3, 4], [2, 3, 4, 5]));
