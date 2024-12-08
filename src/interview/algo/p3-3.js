var maxScoreSightseeingPair = function (v) {
  const len = v.length;
  let i, j;
  const a = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => 0)
  );

  for (j = 1; j < len; j++) {
    let tmp = 0;
    for (i = 1; i <= j; i++) {
      tmp = Math.max(cal(a, v, 0, i), cal(a, v, i, j), v[0] + v[j] - j, tmp);
    }
    a[0][j] = tmp;
  }
  return a[0][len - 1];
};

const cal = (a, v, i, j) => {
  if (a[i][j] > 0) {
    return a[i][j];
  }
  if (i >= j) {
    return (a[i][j] = 0);
  }
  return (a[i][j] = Math.max(a[i][j - 1], a[i + 1][j], v[i] + v[j] - j + i));
};

// 求 max(i, j)
// a[i, j] = max(a[i, j-1], a[i+1, j], v[i] + v[j] + i - j)

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])); // 11
console.log(maxScoreSightseeingPair([1, 2])); // 2
console.log(maxScoreSightseeingPair([7, 8, 8, 10])); // 17
