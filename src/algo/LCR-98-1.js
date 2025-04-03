var uniquePaths = function (m, n) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    dp[i][n - 1] = 1;
  }
  for (let j = 0; j < n; j++) {
    dp[m - 1][j] = 1;
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
    }
  }
  return dp[0][0];
};

console.log(uniquePaths(3, 7) === 28);
console.log(uniquePaths(3, 2) === 3);
console.log(uniquePaths(7, 3) === 28);
console.log(uniquePaths(3, 3) === 6);
console.log(uniquePaths(23, 12));
