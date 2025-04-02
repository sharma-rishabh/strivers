const sortZeroToTwo = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  for (let i = low; i < arr.length; i++) {
    const midEle = arr[mid];
    if (midEle === 0) {
      arr[mid] = arr[low];
      arr[low] = midEle;
      mid++;
      low++;
    } else if (midEle === 2) {
      arr[mid] = arr[high];
      arr[high] = midEle;
      high--;
    } else {
      mid++;
    }
  }
  return arr;
};

console.log(sortZeroToTwo([1, 1, 1, 0, 2, 2, 0, 1, 1, 2, 0]));
