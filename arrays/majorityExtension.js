const majorityExtension = (arr) => {
  let ele1 = Infinity,
    ele2 = Infinity;
  let count1 = 0,
    count2 = 0;

  for (let ele of arr) {
    if (count1 === 0 && ele2 !== ele) {
      ele1 = ele;
      count1++;
    }
    if (count2 === 0 && ele1 !== ele) {
      ele2 = ele;
      count2++;
    }
    if (ele1 === ele) {
      count1++;
    } else if (ele2 === ele) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  return [ele1, ele2];
};

console.log(majorityExtension([11, 33, 33, 11, 33, 11]));
