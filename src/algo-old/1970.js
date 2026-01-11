/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function (m, n, cells) {
  const DIRS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ]

  // 0：陆地
  // 1：水（未被感染）
  // 2：水（已被感染）
  const state = Array(m)
    .fill()
    .map(() => Array(n).fill(0))

  // 判断是否能从左侧到达 (r, c)
  const canReachFromLeft = (r, c) => {
    if (c === 0) {
      // 已经是第一列
      return true
    }
    for (const [dx, dy] of DIRS) {
      const x = r + dx
      const y = c + dy
      if (x >= 0 && x < m && y >= 0 && y < n && state[x][y] === 2) {
        return true
      }
    }
    return false
  }

  // DFS 搜索路径
  const dfs = (r, c) => {
    if (c === n - 1) {
      // 到达右侧
      return true
    }
    state[r][c] = 2 // 标记为已感染

    for (const [dx, dy] of DIRS) {
      const x = r + dx
      const y = c + dy
      if (x >= 0 && x < m && y >= 0 && y < n && state[x][y] === 1 && dfs(x, y)) {
        return true
      }
    }
    return false
  }

  // 遍历每一天
  for (let day = 0; day < cells.length; day++) {
    const [r, c] = cells[day]
    const row = r - 1 // 改成从 0 开始的下标
    const col = c - 1

    state[row][col] = 1 // 标记为未被感染的水

    if (canReachFromLeft(row, col) && dfs(row, col)) {
      return day
    }
  }

  // 如果始终能通过，则返回最后一天
  return cells.length
}

console.log(
  latestDayToCross(2, 2, [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2],
  ])
)

console.log(
  latestDayToCross(2, 2, [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ])
)
