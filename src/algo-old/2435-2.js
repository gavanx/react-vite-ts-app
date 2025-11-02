var numberOfPaths = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array.from({ length: m }).map(() =>
    Array.from({ length: n }).map(() => Array.from({ length: k }).fill(0))
  )
  const mod = 1e9 + 7
  let tmp
  dp[0][0][grid[0][0] % k] = 1
  for (let i = 0; i < m; i++) {
    tmp = grid[i][j] % k
    for (let l = 0; l < k; l++) {
      if (tmp + l === k) {
        dp[i][0][0] = dp[i - 1][0][0] + 1
      } else {
        dp[i][0][l] = dp[i - 1][0][l]
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      tmp = grid[i][j] % k
      if (i === 0 && j === 0) {
        dp[i][j][tmp] = 1
      }
      for (let l = 0; l < k; l++) {}
    }
  }
  return dp[m - 1][n - 1][0]
}
