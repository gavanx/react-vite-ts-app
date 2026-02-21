var countIslands = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const dfs = (i, j) => {
    let res = grid[i][j]
    grid[i][j] = 0
    for (let [x, y] of [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ]) {
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] > 0) {
        res += dfs(x, y)
      }
    }
    return res
  }
  let ans = 0,
    sum
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        // ans = Math.max(ans, dfs(i, j))
        sum = dfs(i, j)
        if (sum % k === 0) {
          ans += 1
        }
      }
    }
  }
  return ans
}
