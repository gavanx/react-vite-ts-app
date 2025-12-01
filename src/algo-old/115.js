var numDistinct = function (s, t) {
  const m = t.length
  const n = s.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for (let j = 0; j <= n; j++) {
    dp[0][j] = 1
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (t[i - 1] === s[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + dp[i][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }
  return dp[m][n]
}

console.log(numDistinct('rabbbit', 'rabbit'))
console.log(numDistinct('babgbag', 'bag'))
