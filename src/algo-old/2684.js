var maxMoves = function (grid) {
  const m = grid.length,
    n = grid[0].length
  const map = new Map()
  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return 0
    const key = `${i}-${j}`
    if (map.has(key)) return map.get(key)
    let res = 0
    for (const [dx, dy] of [
      [-1, 1],
      [0, 1],
      [1, 1],
    ]) {
      const x = i + dx,
        y = j + dy
      if (x >= 0 && x < m && y < n && grid[x][y] > grid[i][j]) {
        res = Math.max(res, dfs(x, y) + 1)
      }
    }
    map.set(key, res)
    return res
  }
  let result = 0
  for (let i = 0; i < m; i++) {
    result = Math.max(result, dfs(i, 0))
  }
  return result
}

console.log(
  maxMoves([
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15],
  ]) === 3
)

console.log(
  maxMoves([
    [3, 2, 4],
    [2, 1, 9],
    [1, 1, 7],
  ]) === 0
)
