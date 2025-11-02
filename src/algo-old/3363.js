var maxCollectedFruits = function (fruits) {
  const n = fruits.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  dp[0][n - 1] = fruits[0][n - 1]
  for (let i = 1; i < n; i++) {
    for (let j = n - 2; j > i && j > n - j; j--) {
      dp[i][j] = dp[i - 1][j] + fruits[i][j]
      if (j - 1 > i && j - 1 < n) {
        dp[i][j] = Math.max(dp[i][j], dp[i][j - 1] + fruits[i][j])
      }
      if (j + 1 > i && j + 1 < n) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j + 1] + fruits[i][j])
      }
    }
  }
  for (let j = 1; j < n; j++) {
    for (let i = 1; i < j && i < n - j; i++) {
      dp[i][j] = dp[i][j - 1] + fruits[i][j]
      if (i - 1 > j && i - 1 < n) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j] + fruits[i][j])
      }
      if (i + 1 > j && i + 1 < n) {
        dp[i][j] = Math.max(dp[i][j], dp[i + 1][j - 1] + fruits[i][j])
      }
    }
  }
  return dp[n - 1][n - 1]
}
console.log(
  maxCollectedFruits([
    [1, 2, 3, 4],
    [5, 6, 8, 7],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)
