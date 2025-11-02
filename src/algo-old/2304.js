var minPathCost = function (grid, moveCost) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  for (let j = 0; j < n; j++) {
    dp[0][j] = grid[0][j]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = Infinity
      for (let k = 0; k < n; k++) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + moveCost[grid[i - 1][k]][j] + grid[i][j])
      }
    }
  }
  return Math.min(...dp[m - 1])
}

console.log(
  minPathCost(
    [
      [5, 3],
      [4, 0],
      [2, 1],
    ],
    [
      [9, 8],
      [1, 5],
      [10, 12],
      [18, 6],
      [2, 4],
      [14, 3],
    ]
  )
)

console.log(
  minPathCost(
    [
      [5, 1, 2],
      [4, 0, 3],
    ],
    [
      [12, 10, 15],
      [20, 23, 8],
      [21, 7, 1],
      [8, 1, 13],
      [9, 10, 25],
      [5, 3, 2],
    ]
  )
)
