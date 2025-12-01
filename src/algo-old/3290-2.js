var maxScore = function (a, b) {
  const n = b.length
  const dp = Array.from({ length: 4 }, () => Array(n).fill(-1))
  for (let r = 0; r < 4; r++) {
    for (let i = 0; i < n; i++) {
      if (r === 0) {
        dp[r][i] = Math.max((i > 0 ? dp[r][i - 1] : 0), a[r] * b[i])
      } else {
        dp[r][i] = Math.max(
          (i > 0 ? dp[r][i - 1] : -Infinity),
          a[r] * b[i] + (i > 0 ? dp[r - 1][i - 1] : -Infinity)
        )
      }
    }
  }
  return dp[3][n - 1]
}
console.log(maxScore([3, 2, 5, 6], [2, -6, 4, -5, -3, 2, -7]))
console.log(maxScore([-1, 4, 5, -2], [-5, -1, -3, -2, -4]))
