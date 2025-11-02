var maximumAmount = function (coins) {
  const m = coins.length
  const n = coins[0].length
  const dp = Array.from({ length: m }, () =>
    Array(n)
      .fill(0)
      .map(() => [0, 0, 0])
  )
  dp[0][0][0] = coins[0][0]
  dp[0][0][1] = Math.max(0, coins[0][0])
  dp[0][0][2] = dp[0][0][1]
  for (let i = 1; i < m; i++) {
    dp[i][0][0] = dp[i - 1][0][0] + coins[i][0]
    dp[i][0][1] = dp[i - 1][0][1] + coins[i][0]
    dp[i][0][2] = dp[i - 1][0][2] + coins[i][0]
    if (coins[i][0] < 0) {
      dp[i][0][1] = Math.max(dp[i][0][1], dp[i - 1][0][0])
      dp[i][0][2] = Math.max(dp[i][0][2], dp[i - 1][0][1])
    }
  }
  for (let j = 1; j < n; j++) {
    dp[0][j][0] = dp[0][j - 1][0] + coins[0][j]
    dp[0][j][1] = dp[0][j - 1][1] + coins[0][j]
    dp[0][j][2] = dp[0][j - 1][2] + coins[0][j]
    if (coins[0][j] < 0) {
      dp[0][j][1] = Math.max(dp[0][j][1], dp[0][j - 1][0])
      dp[0][j][2] = Math.max(dp[0][j][2], dp[0][j - 1][1])
    }
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i][j - 1][0]) + coins[i][j]
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i][j - 1][1]) + coins[i][j]
      dp[i][j][2] = Math.max(dp[i - 1][j][2], dp[i][j - 1][2]) + coins[i][j]
      if (coins[i][j] < 0) {
        dp[i][j][1] = Math.max(dp[i][j][1], dp[i - 1][j][0], dp[i][j - 1][0])
        dp[i][j][2] = Math.max(dp[i][j][2], dp[i][j - 1][1], dp[i - 1][j][1])
      }
    }
  }
  return Math.max(...dp[m - 1][n - 1])
}

console.log(
  maximumAmount([
    [0, 1, -1],
    [1, -2, 3],
    [2, -3, 4],
  ])
)

console.log(
  maximumAmount([
    [10, 10, 10],
    [10, 10, 10],
  ])
)

console.log(maximumAmount([[-4]]))
console.log(
  maximumAmount([
    [2, -18, -8],
    [16, -11, 5],
    [13, -15, -4],
  ])
)
