const arrangeBySign = (arr) => {
  let posIndex = 0;
  let negativeIndex = 1;
  const rearrangedArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      rearrangedArray[posIndex] = arr[i];
      posIndex += 2;
    } else {
      rearrangedArray[negativeIndex] = arr[i];
      negativeIndex += 2;
    }
  }
  return rearrangedArray
};

console.log(arrangeBySign([1, 2, -3, -1, 2, -3]));
