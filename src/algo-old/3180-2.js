var maxTotalReward = function (rewardValues) {
  const n = rewardValues.length
  const m = 2000 * 2000
  rewardValues = rewardValues.sort((a, b) => a - b)
  const dp = Array.from({ length: n + 1 }, () => Array(m + 2).fill(0))
  dp[0][0] = 0
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= m; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= rewardValues[i - 1]) {
        dp[i][j] += dp[i - 1][j - rewardValues[i - 1]] + rewardValues[i - 1]
      }
    }
  }
  let max = 0
  for (let i = 0; i <= m; i++) {
    if (dp[n][i] > 0) {
      max = Math.max(max, i)
    }
  }
  return max
}

console.log(maxTotalReward([1, 1, 3, 3]))
console.log(maxTotalReward([1, 6, 4, 3, 2]))
