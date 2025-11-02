var minFallingPathSum = function (grid) {
  const n = grid.length
  const dp = Array.from({ length: n }, () => Array(n).fill(0))
  for (let j = 0; j < n; j++) {
    dp[0][j] = grid[0][j]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity
      for (let k = 0; k < n; k++) {
        if (k !== j) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + grid[i][j])
        }
      }
    }
  }
  return Math.min(...dp[n - 1])
}

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)

console.log(minFallingPathSum([[7]]))
