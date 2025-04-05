var bestTiming = function (prices) {
  const n = prices.length
  const dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
  dp[0][1] = -prices[0]
  dp[0][0] = 0
  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[n - 1][0]
}

console.log(bestTiming([3, 6, 2, 9, 8, 5]))
console.log(bestTiming([8, 12, 15, 7, 3, 10]))
