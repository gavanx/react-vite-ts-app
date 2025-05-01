var minimumVisitedCells = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const dp = Array.from({ length: m }, () => Array(n).fill(-1))
  dp[0][0] = 1
  const r = Array.from({ length: m }, () => new MinPriorityQueue())
  const c = Array.from({ length: n }, () => new MinPriorityQueue())
  const update = (x, y) => {
    if (x === -1 || x > y) {
      return y
    }
    return x
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      while (r[i].size() && r[i].front().element[1] + grid[i][r[i].front().element[1]] < j) {
        r[i].dequeue()
      }
      if (r[i].size()) {
        const j1 = r[i].front().element[1]
        dp[i][j] = update(dp[i][j], dp[i][j1] + 1)
      }
      while (c[j].size() && c[j].front().element[1] + grid[c[j].front().element[1]][j] < i) {
        c[j].dequeue()
      }
      if (c[j].size()) {
        const i1 = c[j].front().element[1]
        dp[i][j] = update(dp[i][j], dp[i1][j] + 1)
      }
      if (dp[i][j] !== -1) {
        r[i].enqueue([dp[i][j], j], dp[i][j])
        c[j].enqueue([dp[i][j], i], dp[i][j])
      }
    }
  }
  return dp[m - 1][n - 1]
}
