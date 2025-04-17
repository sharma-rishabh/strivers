const sum = (arr) => arr.reduce((context, ele) => context + ele, 0);

const subArraySum = (arr, sumToFind) => {
  const subArrs = [];
  const currSub = [];
  for (let ele of arr) {
    currSub.push(ele);
    while (sum(currSub) > sumToFind) {
      currSub.shift();
    }
    if (sum(currSub) === sumToFind) {
      subArrs.push([...currSub]);
    }
  }
  return subArrs;
};

console.log(subArraySum([3, 1, 2, 4], 6));
