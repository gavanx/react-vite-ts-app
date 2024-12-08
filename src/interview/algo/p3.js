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

  let ret = { i: 0, j: 0, max: 0 };
  for (let m = 1; m < len; m++) {
    for (i = 0; i < len - 1; i++) {
      j = i + m;
      if (j < len) {
        a[i][j] = Math.max(a[i][j - 1], a[i + 1][j], v[i] + v[j] - m);
        console.log(i, j, a[i][j - 1], a[i + 1][j], a[i][j]);
        if (a[i][j] > ret.max) {
          ret = { i, j, max: a[i][j] };
        }
      }
    }
  }
  return ret.max;
};

// 求 max(i, j)
// a[i, j] = max(a[i, j-1], a[i+1, j], v[i] + v[j] + i - j)

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6]));
// console.log(maxScoreSightseeingPair([1, 2]));
