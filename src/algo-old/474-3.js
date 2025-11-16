var findMaxForm = function (strs, m, n) {
  const len = strs.length
  const dp = Array.from({ length: len + 1 }, () =>
    Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  )
  for (let i = 1; i <= len; i++) {
    let z = 0
    let o = 0
    for (const c of strs[i - 1]) {
      if (c === '0') z++
      else o++
    }
    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j >= z && k >= o) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - z][k - o] + 1)
        } else {
          dp[i][j][k] = dp[i - 1][j][k]
        }
      }
    }
  }
  return dp[len][m][n]
}
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
console.log(findMaxForm(['10', '0', '1'], 1, 1))
