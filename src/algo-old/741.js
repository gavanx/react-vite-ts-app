var cherryPickup = function (grid) {
  const n = grid.length
  const dfs = (i, j, flag) => {
    if (i < 0 || i >= n || j < 0 || j >= n) return 0
    if (grid[i][j] === -1) {
      return 0
    }
    if (i === 0 && j === 0 && !flag) {
      return 0
    }
    if (i === n - 1 && j === n - 1 && flag) {
      return dfs(i, j, false)
    }
    let res = 0
    if (flag) {
      res = grid[i][j] + Math.max(dfs(i + 1, j, true), dfs(i, j + 1, true))
    } else {
      res = grid[i][j] + Math.max(dfs(i - 1, j, false), dfs(i, j - 1, false))
    }
    grid[i][j] = 0
    return res
  }
  return dfs(0, 0, true)
}

console.log(
  cherryPickup([
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ])
)

console.log(
  cherryPickup([
    [1, 1, -1],
    [1, -1, 1],
    [-1, 1, 1],
  ])
)
