/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (v) {
  // values[i] + values[j] + i - j
  const len = v.length;
  let i, j;
  const a = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => 0)
  );

  for (let m = 1; m < len; m++) {
    for (i = 0; i < len - 1; i++) {
      j = i + m;
      if (j < len) {
        cal(a, i, j, v);
      }
    }
  }
  return a[0][len - 1];
};

const cal = (a, i, j, v) => {
  if (a[i][j] > 0) {
    return a[i][j];
  }
  if (i === j) {
    return (a[i][j] = 0);
  }
  return (a[i][j] = Math.max(a[i][j - 1], a[i + 1][j], v[i] + v[j] - j + i));
};

// 求 max(i, j)
// a[i, j] = max(a[i, j-1], a[i+1, j], v[i] + v[j] + i - j)

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
// console.log(maxScoreSightseeingPair([1, 2]));
