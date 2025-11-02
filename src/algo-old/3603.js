var minCost = function (m, n, waitCost) {
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  dp[0][0] = 1
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + waitCost[i - 1][0] + i + 1
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + waitCost[0][j - 1] + j + 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] =
        Math.min(dp[i - 1][j] + waitCost[i - 1][j], dp[i][j - 1] + waitCost[i][j - 1]) +
        (i + 1) * (j + 1)
    }
  }
  return dp[m - 1][n - 1] - waitCost[0][0]
}

console.log(minCost(1, 2, [[1, 2]]))
console.log(
  minCost(2, 2, [
    [3, 5],
    [2, 4],
  ])
)
console.log(
  minCost(2, 3, [
    [6, 1, 4],
    [3, 2, 5],
  ])
)
