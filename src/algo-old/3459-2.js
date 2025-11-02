function lenOfVDiagonal(grid) {
  const DIRS = [
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 1],
  ]
  const m = grid.length
  const n = grid[0].length
  const memo = new Map()

  function dfs(i, j, k, canTurn, target) {
    const key = `${i},${j},${k},${canTurn ? 1 : 0},${target}`
    if (memo.has(key)) {
      return memo.get(key)
    }

    const ni = i + DIRS[k][0]
    const nj = j + DIRS[k][1]

    if (ni < 0 || ni >= m || nj < 0 || nj >= n || grid[ni][nj] !== target) {
      memo.set(key, 0)
      return 0
    }

    let res = dfs(ni, nj, k, canTurn, 2 - target) + 1

    if (canTurn) {
      const newK = (k + 1) % 4
      res = Math.max(res, dfs(ni, nj, newK, false, 2 - target) + 1)
    }

    memo.set(key, res)
    return res
  }

  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const maxs = [m - i, j + 1, i + 1, n - j]
        for (let k = 0; k < 4; k++) {
          if (maxs[k] > ans) {
            ans = Math.max(ans, dfs(i, j, k, true, 2) + 1)
          }
        }
      }
    }
  }

  return ans
}

console.log(
  lenOfVDiagonal([
    [2, 2, 1, 2, 2],
    [2, 0, 2, 2, 0],
    [2, 0, 1, 1, 0],
    [1, 0, 2, 2, 2],
    [2, 0, 0, 2, 2],
  ])
)
