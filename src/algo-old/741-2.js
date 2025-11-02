function cherryPickup(grid) {
  const n = grid.length
  const memo = new Map()

  function dfs(t, j, k) {
    const key = `${t},${j},${k}`
    if (memo.has(key)) {
      return memo.get(key)
    }

    if (j < 0 || j >= n || k < 0 || k >= n) {
      memo.set(key, -Infinity)
      return -Infinity
    }

    const x1 = t - j
    const x2 = t - k

    if (x1 < 0 || x1 >= n || x2 < 0 || x2 >= n) {
      memo.set(key, -Infinity)
      return -Infinity
    }

    if (grid[x1][j] < 0 || grid[x2][k] < 0) {
      memo.set(key, -Infinity)
      return -Infinity
    }

    if (t === 0) {
      const res = grid[0][0]
      memo.set(key, res)
      return res
    }

    const prev1 = dfs(t - 1, j, k)
    const prev2 = dfs(t - 1, j, k - 1)
    const prev3 = dfs(t - 1, j - 1, k)
    const prev4 = dfs(t - 1, j - 1, k - 1)

    const maxPrev = Math.max(prev1, prev2, prev3, prev4)

    let current = grid[x1][j]
    if (j !== k) {
      current += grid[x2][k]
    }

    const res = maxPrev + current
    memo.set(key, res)
    return res
  }

  const result = dfs(2 * n - 2, n - 1, n - 1)
  return Math.max(result, 0)
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
