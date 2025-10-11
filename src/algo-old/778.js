var swimInWater = function (grid) {
  const n = grid.length
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const dfs = (i, j, t, visited) => {
    if (i < 0 || i >= n || j < 0 || j >= n || visited[i][j]) return false
    visited[i][j] = true
    if (grid[i][j] > t) return false
    if (i === n - 1 && j === n - 1) return true
    for (const [dx, dy] of dirs) {
      if (dfs(i + dx, j + dy, t, visited)) return true
    }
    return false
  }
  const check = (t) => {
    const visited = new Array(n).fill(0).map(() => new Array(n).fill(false))
    return dfs(0, 0, t, visited)
  }
  let left = 0,
    right = n * n - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

console.log(
  swimInWater([
    [0, 2],
    [1, 3],
  ])
)

console.log(
  swimInWater([
    [0, 1, 2, 3, 4],
    [24, 23, 22, 21, 5],
    [12, 13, 14, 15, 16],
    [11, 17, 18, 19, 20],
    [10, 9, 8, 7, 6],
  ])
)
