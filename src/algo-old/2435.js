var numberOfPaths = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  const map = new Map()
  const dfs = (i, j, s) => {
    if (i >= m || j >= n) {
      return 0
    }
    if (i === m - 1 && j === n - 1) {
      return (s + grid[i][j]) % k === 0 ? 1 : 0
    }
    const key = `${i},${j},${s}`
    if (map.has(key)) return map.get(key)
    s = (s + grid[i][j]) % k
    let res = dfs(i + 1, j, s) + dfs(i, j + 1, s)
    res = res % 1_000_000_007
    map.set(key, res)
    return res
  }
  return dfs(0, 0, 0)
}

console.log(
  numberOfPaths(
    [
      [5, 2, 4],
      [3, 0, 5],
      [0, 7, 2],
    ],
    3
  )
)

console.log(numberOfPaths([[0, 0]], 5))
