var cherryPickup = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const map = new Map()
  const dfs = (i, j, k) => {
    if (i < 0 || j < 0 || k < 0 || i >= m || j >= n || k >= n) return 0
    const key = `${i},${j},${k}`
    if (map.has(key)) return map.get(key)
    let res = grid[i][j]
    if (j !== k) res += grid[i][k]
    res += Math.max(
      dfs(i + 1, j - 1, k - 1),
      dfs(i + 1, j - 1, k),
      dfs(i + 1, j - 1, k + 1),
      dfs(i + 1, j, k - 1),
      dfs(i + 1, j, k),
      dfs(i + 1, j, k + 1),
      dfs(i + 1, j + 1, k - 1),
      dfs(i + 1, j + 1, k),
      dfs(i + 1, j + 1, k + 1)
    )
    map.set(key, res)
    return res
  }
  return dfs(0, 0, n - 1)
}

console.log(
  cherryPickup([
    [3, 1, 1],
    [2, 5, 1],
    [1, 5, 5],
    [2, 1, 1],
  ])
)

console.log(
  cherryPickup([
    [1, 0, 0, 0, 0, 0, 1],
    [2, 0, 0, 0, 0, 3, 0],
    [2, 0, 9, 0, 0, 0, 0],
    [0, 3, 0, 5, 4, 0, 0],
    [1, 0, 2, 3, 0, 0, 6],
  ])
)

console.log(
  cherryPickup([
    [1, 0, 0, 3],
    [0, 0, 0, 3],
    [0, 0, 3, 3],
    [9, 0, 3, 3],
  ])
)

console.log(
  cherryPickup([
    [1, 1],
    [1, 1],
  ])
)
