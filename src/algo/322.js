var coinChange = function (coins, amount) {
  const n = coins.length
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < n; j++) {
      if (coins[j] <= i && dp[i - coins[j]] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
