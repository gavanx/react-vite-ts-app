var pacificAtlantic = function (heights) {
  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  const m = heights.length
  const n = heights[0].length
  const pacific = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(false))
  const dfs = (i, j, visited) => {
    if (visited[i][j]) return
    visited[i][j] = true
    for (const [dx, dy] of dirs) {
      const x = i + dx
      const y = j + dy
      if (x < 0 || x >= m || y < 0 || y >= n) continue
      if (heights[x][y] < heights[i][j]) continue
      dfs(x, y, visited)
    }
  }
  for (let i = 0; i < m; i++) {
    dfs(i, 0, pacific)
    dfs(i, n - 1, atlantic)
  }
  for (let j = 0; j < n; j++) {
    dfs(0, j, pacific)
    dfs(m - 1, j, atlantic)
  }
  const res = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j])
      }
    }
  }
  return res
}

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
)
