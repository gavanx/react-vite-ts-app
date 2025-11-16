var numberOfWays = function (n, x) {
  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0))
  dp[0][0] = 1
  const mod = 1e9 + 7
  let d
  for (let i = 1; i <= n; i++) {
    d = Math.pow(i, x)
    for (let j = 0; j <= n; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= d) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - d]) % mod
      }
    }
  }
  return dp[n][n]
}

console.log(numberOfWays(10, 2))
console.log(numberOfWays(4, 1))
