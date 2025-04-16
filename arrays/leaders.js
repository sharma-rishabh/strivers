const leaders = (arr) => {
  const leaders = [];
  let currLeader = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > currLeader) {
      leaders.push(arr[i]);
      currLeader = arr[i];
    }
  }
  return leaders;
};

console.log(leaders([10, 22, 12, 3, 0, 6]));
