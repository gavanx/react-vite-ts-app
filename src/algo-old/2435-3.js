var numberOfPaths = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array.from({ length: m + 1 }).map(() =>
    Array.from({ length: n + 1 }).map(() => Array.from({ length: k }).fill(0))
  )
  const mod = 1e9 + 7
  dp[0][1][0] = 1
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      for (let l = 0; l < k; l++) {
        dp[i][j][(l + grid[i - 1][j - 1]) % k] = (dp[i - 1][j][l] + dp[i][j - 1][l]) % mod
      }
    }
  }
  return dp[m][n][0]
}

console.log(
  numberOfPaths(
    [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ],
    3
  )
)

console.log(numberOfPaths([[0, 0]], 5))
console.log(
  numberOfPaths(
    [
      [7, 3, 4, 9],
      [2, 3, 6, 2],
      [2, 3, 7, 0],
    ],
    1
  )
)
