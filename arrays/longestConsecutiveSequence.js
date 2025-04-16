const longestConsecutiveSequence = (arr) => {
  let longest = [];
  let curr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === curr[curr.length - 1] + 1) {
      curr.push(arr[i]);
    } else {
      curr = [arr[i]];
    }

    if (curr.length > longest.length) {
      longest = [...curr];
    }
  }
  return longest;
};

console.log(longestConsecutiveSequence([100, 200, 1, 2,3, 4]));
