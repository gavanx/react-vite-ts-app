var minCost = function (grid, k) {
  const m = grid.length,
    n = grid[0].length
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => Array(k).fill(0))
  )
  const costArr = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      costArr.push([grid[i][j], i, j])
    }
  }
  costArr.sort((a, b) => a[0] - b[0])
  const set = new Set()
  const dfs = (i, j, k) => {
    if (dp[i][j][k] > 0) return dp[i][j][k]
    if (i === m - 1 && j === n - 1) return 0
    if (i >= m || j >= n) return Infinity
    let res = Math.min(
      i < m - 1 ? dfs(i + 1, j, k) + grid[i + 1][j] : Infinity,
      j < n - 1 ? dfs(i, j + 1, k) + grid[i][j + 1] : Infinity
    )
    if (k > 0) {
      set.clear()
      set.add(`${i},${j}`)
      for (let idx = 0; idx < costArr.length; idx++) {
        const [cost, x, y] = costArr[idx]
        if (cost > grid[i][j]) break
        if (set.has(`${x},${y}`)) continue
        set.add(`${x},${y}`)
        res = Math.min(res, dfs(x, y, k - 1))
      }
    }
    return (dp[i][j][k] = res)
  }
  return dfs(0, 0, k)
}

console.log(
  minCost(
    [
      [1, 3, 3],
      [2, 5, 4],
      [4, 3, 5],
    ],
    2
  )
)

console.log(
  minCost(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    1
  )
)

console.log(
  minCost(
    [
      [10, 3, 15, 13],
      [10, 7, 12, 3],
    ],
    9
  )
)
