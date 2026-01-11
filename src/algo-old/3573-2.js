var maximumProfit = function (prices, k) {
  const n = prices.length
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: k + 2 }, () => [-Infinity, -Infinity, -Infinity])
  )
  for (let j = 1; j <= k + 1; j++) {
    dp[0][j][0] = 0
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k + 1; j++) {
      const p = prices[i - 1]
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j - 1][1] + p, dp[i - 1][j][2] - p)
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - p)
      dp[i][j][2] = Math.max(dp[i - 1][j][2], dp[i - 1][j - 1][0] + p)
    }
  }
  return dp[n][k + 1][0]
}

console.log(maximumProfit([1, 7, 9, 8, 2], 2))
console.log(maximumProfit([14, 6, 10, 19], 1))
