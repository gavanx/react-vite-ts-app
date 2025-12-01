var maxScore = function (a, b) {
  const n = b.length
  const dp = Array.from({ length: n + 1 }, () => Array(5).fill(0))
  for (let i = 1; i < 5; i++) {
    dp[0][i] = -Infinity
  }
  for (let i = 1; i <= n; i++) {
    for (let r = 1; r <= 4; r++) {
      dp[i][r] = Math.max(dp[i - 1][r], a[r - 1] * b[i - 1] + dp[i - 1][r - 1])
    }
  }
  return dp[n][4]
}

console.log(maxScore([3, 2, 5, 6], [2, -6, 4, -5, -3, 2, -7]))
console.log(maxScore([-1, 4, 5, -2], [-5, -1, -3, -2, -4]))
