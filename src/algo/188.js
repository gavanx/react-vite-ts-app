var maxProfit = function (k, prices) {
  const n = prices.length
  const dp = Array.from({ length: k + 1 }, () => Array(2).fill(0))
  for (let i = 1; i <= k; i++) {
    dp[i][0] = -prices[0]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[j][0] = Math.max(dp[j][0], dp[j - 1][1] - prices[i])
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] + prices[i])
    }
  }
  return dp[k][1]
}

console.log(maxProfit(2, [2, 4, 1]))
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))
