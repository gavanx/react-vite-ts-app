var maxScoreSightseeingPair = function (v) {
  const len = v.length;
  let mx = v[0],
    ans = 0;
  for (let j = 1; j < len; j++) {
    ans = Math.max(ans, mx + v[j] - j);
    mx = Math.max(mx, v[j] + j);
  }
  return ans;
};

// 求 max(i, j)
// a[i, j] = max(a[i, j-1], a[i+1, j], v[i] + v[j] + i - j)

console.log(maxScoreSightseeingPair([8, 1, 5, 2, 6])); // 11
console.log(maxScoreSightseeingPair([1, 2])); // 2
console.log(maxScoreSightseeingPair([7, 8, 8, 10])); // 17
