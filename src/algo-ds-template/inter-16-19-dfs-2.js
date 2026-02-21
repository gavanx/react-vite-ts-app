var pondSizes = function (land) {
  const grid = land
  const m = grid.length
  const n = grid[0].length
  const dfs = (i, j) => {
    let res = 1
    grid[i][j] = 1
    for (let [x, y] of [
      [i + 1, j],
      [i + 1, j - 1],
      [i + 1, j + 1],
      [i - 1, j],
      [i - 1, j - 1],
      [i - 1, j + 1],
      [i, j + 1],
      [i, j - 1],
    ]) {
      if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] === 0) {
        res += dfs(x, y)
      }
    }
    return res
  }
  let ans = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        ans.push(dfs(i, j))
      }
    }
  }
  return ans.sort((a, b) => a - b)
}
