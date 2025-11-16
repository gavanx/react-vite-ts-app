var maxTotalReward = function (rewardValues) {
  const n = rewardValues.length
  let m = Math.max(...rewardValues)
  m = m * 2 - 1
  rewardValues = rewardValues.sort((a, b) => a - b)
  const dp = Array.from({ length: n + 1 }, () => Array(m + 2).fill(false))
  dp[0][0] = true
  let v
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = dp[i - 1][j]
      v = rewardValues[i - 1]
      if (!dp[i][j] && j >= v && j < 2 * v) {
        dp[i][j] = dp[i - 1][j - rewardValues[i - 1]]
      }
    }
  }
  for (let i = m; i >= 0; i--) {
    if (dp[n][i]) {
      return i
    }
  }
}

console.log(maxTotalReward([1, 1, 3, 3]))
console.log(maxTotalReward([1, 6, 4, 3, 2]))
