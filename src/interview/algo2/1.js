var buttonWithLongestTime = function (a) {
  const len = a.length;
  let maxTime = a[0][1];
  let maxIndex = a[0][0];
  let cur;
  for (let i = 1; i < len; i++) {
    cur = a[i][1] - a[i - 1][1];
    if (cur > maxTime) {
      maxTime = cur;
      maxIndex = a[i][0];
    } else if (cur === maxTime && a[i][0] < maxIndex) {
      maxIndex = a[i][0];
    }
  }
  return maxIndex;
};

// console.log(
//   buttonWithLongestTime([
//     [1, 2],
//     [2, 5],
//     [3, 9],
//     [1, 15],
//   ])
// );

// console.log(
//   buttonWithLongestTime([
//     [10, 5],
//     [1, 7],
//   ])
// );

console.log(
  buttonWithLongestTime([
    [9, 4],
    [19, 5],
    [2, 8],
    [3, 11],
    [2, 15],
  ])
);
