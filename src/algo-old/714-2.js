var maxProfit = function (prices, fee) {
  const n = prices.length
  const dp = Array.from({ length: n + 1 }, () => [-Infinity, -Infinity])
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    const p = prices[i - 1]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + p - fee) // 不持有股票
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - p) // 持有股票
  }
  return dp[n][0]
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2)) // 8
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3)) // 6
