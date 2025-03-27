const removeDuplicates = (arr) => {
  return arr.reduce(
    ([prev, uniqueElements], current) => {
      current === prev ? uniqueElements : uniqueElements.push(current);
      return [current, uniqueElements]
    },
    [arr[0], [arr[0]]]
  )[1];
};

console.log(removeDuplicates([1,1,1,1,1,2,2,2,2,2,3]));
