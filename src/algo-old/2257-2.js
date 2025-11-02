var countUnguarded = function (m, n, guards, walls) {
  const DIRS = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]
  const guarded = Array.from({ length: m }, () => Array(n).fill(0))

  for (const [x, y] of guards) {
    guarded[x][y] = -1
  }
  for (const [x, y] of walls) {
    guarded[x][y] = -1
  }

  for (const [x0, y0] of guards) {
    for (const [dx, dy] of DIRS) {
      let x = x0 + dx,
        y = y0 + dy
      while (0 <= x && x < m && 0 <= y && y < n && guarded[x][y] !== -1) {
        guarded[x][y] = 1
        x += dx
        y += dy
      }
    }
  }

  let ans = 0
  for (const row of guarded) {
    for (const x of row) {
      if (x === 0) {
        ans++
      }
    }
  }
  return ans
}
