var rowAndMaximumOnes = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < m; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        count++;
      }
    }
    if (count > max) {
      max = count;
      maxIndex = i;
    }
  }
  return [maxIndex, max];
};

// console.log(
//   rowAndMaximumOnes([
//     [0, 1],
//     [1, 0],
//   ])
// );

console.log(
  rowAndMaximumOnes([
    [0, 0, 0],
    [0, 1, 1],
  ])
);
