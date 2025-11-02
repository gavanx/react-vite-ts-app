var lenOfVDiagonal = function (grid) {
  const n = grid.length
  const m = grid[0].length
  const dirs = [
    [-1, -1], //左上
    [-1, 1], //右上
    [1, -1], // 左下
    [1, 1], //右下
  ]
  const dfs = (i, j, dir, canTurn) => {
    if (i < 0 || i >= n || j < 0 || j >= m) return 0
    const last = grid[i][j]
    const nextVal = last === 1 ? 2 : last === 2 ? 0 : 2
    let res = last === 1 ? 1 : 0
    const [x, y] = [i + dirs[dir][0], j + dirs[dir][1]]
    if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === nextVal) {
      res = Math.max(res, 1 + dfs(x, y, dir, canTurn))
    }
    if (canTurn && last !== 1) {
      dir = (dir + 1) % 4
      const [x, y] = [i + dirs[dir][0], j + dirs[dir][1]]
      if (x >= 0 && x < n && y >= 0 && y < m && grid[x][y] === nextVal) {
        res = Math.max(res, 1 + dfs(x, y, dir, false))
      }
    }
    return last === 1 ? 1 : 0
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; i < m; j++) {
      if (grid[i][j] === 1) {
        console.log('start', i, j)
        for (let k = 0; k < 4; k++) {
          ans = Math.max(ans, dfs(i, j, k, true))
        }
      }
    }
  }
  return res
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
