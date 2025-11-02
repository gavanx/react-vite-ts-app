var maxProductPath = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const mod = 1e9 + 7
  const dp = Array.from({ length: m }, () => Array.from({ length: n }, () => Array(2).fill(0)))
  dp[0][0][0] = grid[0][0]
  dp[0][0][1] = grid[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0][0] = dp[i - 1][0][0] * grid[i][0]
    dp[i][0][1] = dp[i - 1][0][1] * grid[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j][0] = dp[0][j - 1][0] * grid[0][j]
    dp[0][j][1] = dp[0][j - 1][1] * grid[0][j]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const val = grid[i][j]
      dp[i][j][0] = Math.max(
        dp[i - 1][j][0] * val,
        dp[i][j - 1][0] * val,
        dp[i - 1][j][1] * val,
        dp[i][j - 1][1] * val
      )
      dp[i][j][1] = Math.min(
        dp[i - 1][j][1] * val,
        dp[i][j - 1][1] * val,
        dp[i - 1][j][0] * val,
        dp[i][j - 1][0] * val
      )
    }
  }
  const max = dp[m - 1][n - 1][0]
  console.log(max)
  return max < 0 ? -1 : max % mod
}

console.log(
  maxProductPath([
    [-1, -2, -3],
    [-2, -3, -3],
    [-3, -3, -2],
  ])
)

console.log(
  maxProductPath([
    [1, -2, 1],
    [1, -2, 1],
    [3, -4, 1],
  ])
)

console.log(
  maxProductPath([
    [1, 3],
    [0, -4],
  ])
)
