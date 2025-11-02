var uniquePaths = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const map = new Map()
  const dfs = (i, j, k) => {
    if (i < 0 || j < 0) return 0
    if (i === 0 && j === 0) {
      return 1
    }
    const key = `${i},${j},${k}`
    if (map.has(key)) return map.get(key)

    let res = 0
    if (grid[i][j] === 0) {
      res = (dfs(i - 1, j, 1) + dfs(i, j - 1, 0)) % 1_000_000_007
    } else if (k === 0) {
      res = dfs(i - 1, j, 1)
    } else {
      res = dfs(i, j - 1, 0)
    }
    map.set(key, res)
    return res
  }
  return dfs(m - 1, n - 1, 0)
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

console.log(
  uniquePaths([
    [0, 0, 0],
    [1, 1, 0],
  ])
)
