var countUnguarded = function (m, n, guards, walls) {
  let memo = Array.from({ length: m }, () => Array(n).fill(0))
  let w = Array.from({ length: m }, () => Array(n).fill(0))
  for (let [x, y] of walls) {
    w[x][y] = 1
    memo[x][y] = 1
  }
  const dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
  for (let [x, y] of guards) {
    memo[x][y] = 1
    for (let [dx, dy] of dir) {
      let nx = x + dx
      let ny = y + dy
      while (nx >= 0 && nx < m && ny >= 0 && ny < n && w[nx][ny] === 0) {
        memo[nx][ny] = 1
        nx += dx
        ny += dy
      }
    }
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (memo[i][j] === 0) {
        ans++
      }
    }
  }
  return ans
}

console.log(
  countUnguarded(
    4,
    6,
    [
      [0, 0],
      [1, 1],
      [2, 3],
    ],
    [
      [0, 1],
      [2, 2],
      [1, 4],
    ]
  )
)

console.log(
  countUnguarded(
    3,
    3,
    [[1, 1]],
    [
      [0, 1],
      [1, 0],
      [2, 1],
      [1, 2],
    ]
  )
)
