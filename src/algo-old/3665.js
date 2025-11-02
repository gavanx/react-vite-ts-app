var uniquePaths = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return 0
    if (i === m - 1 && j === n - 1) return 1
    let res = 0
    if (grid[i][j] === 1) {
      if (right) {
        res = dfs(i + 1, j)
      } else {
        res = dfs(i, j + 1, true)
      }
    } else {
      res = dfs(i + 1, j, true) + dfs(i, j + 1, false)
    }
    return res
  }
  return dfs(0, 0)
}

console.log(
  uniquePaths([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ])
)
console.log(
  uniquePaths([
    [0, 0],
    [0, 0],
  ])
)
console.log(
  uniquePaths([
    [0, 1, 1],
    [1, 1, 0],
  ])
)
