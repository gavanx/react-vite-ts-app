var maxProfit = function (prices) {
  const n = prices.length
  const dp = Array.from({ length: n + 1 }, () => [-Infinity, -Infinity, -Infinity])
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    const p = prices[i - 1]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]) // 不持有股票
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - p) // 持有股票
    dp[i][2] = dp[i - 1][1] + p // 卖出股票，进入冷冻期
  }
  return Math.max(dp[n][0], dp[n][2])
}

console.log(maxProfit([1, 2, 3, 0, 2]))
console.log(maxProfit([1]))
