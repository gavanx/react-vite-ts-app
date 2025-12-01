var maxScore = function (a, b) {
  const n = b.length
  const dp = Array.from({ length: 5 }, () => Array(n + 1).fill(0))
  for (let r = 1; r <= 4; r++) {
    dp[r][0] = -Infinity
  }
  for (let r = 1; r <= 4; r++) {
    for (let i = 1; i <= n; i++) {
      dp[r][i] = Math.max(dp[r][i - 1], a[r - 1] * b[i - 1] + dp[r - 1][i - 1])
    }
  }
  return dp[4][n]
}
console.log(maxScore([3, 2, 5, 6], [2, -6, 4, -5, -3, 2, -7]))
console.log(maxScore([-1, 4, 5, -2], [-5, -1, -3, -2, -4]))
