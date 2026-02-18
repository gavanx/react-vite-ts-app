var maxAreaOfIsland = function (grid) {
  const m = grid.length,
    n = grid[0].length

  function dfs(i, j) {
    let area = 1
    grid[i][j] = 0
    for (const [x, y] of [
      [i, j - 1],
      [i, j + 1],
      [i - 1, j],
      [i + 1, j],
    ]) {
      if (0 <= x && x < m && 0 <= y && y < n && grid[x][y]) {
        area += dfs(x, y)
      }
    }
    return area
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        ans = Math.max(ans, dfs(i, j))
      }
    }
  }
  return ans
}
