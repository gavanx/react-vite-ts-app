var uniquePaths = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const next = (i, j) => {
    const res = []
    if (i + 1 < m) {
      if (grid[i + 1][j] === 0) {
        res.push([i + 1, j])
      } else {
        res.push(...next2(i + 1, j + 1, false))
      }
    }
    if (j + 1 < n) {
      if (grid[i][j + 1] === 0) {
        res.push([i, j + 1])
      } else {
        res.push(...next2(i + 1, j + 1, true))
      }
    }
    return res
  }
  const next2 = (i, j, right) => {
    const res = []
    if (i < 0 || j < 0 || i === m || j === n) return res
    if (grid[i][j] === 0) {
      res.push([i, j])
    } else {
      if (right) {
        res.push(...next2(i + 1, j, false))
      } else {
        res.push(...next2(i, j + 1, true))
      }
    }
    return res
  }
  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i === m || j === n) return 0
    if (grid[i][j] === 1) return 0
    if (i === m - 1 && j === n - 1) return 1
    const res = next(i, j)
    let ans = 0
    for (const [x, y] of res) {
      ans += dfs(x, y)
    }
    console.log(i, j, JSON.stringify(res), ans)
    return ans
  }
  return dfs(0, 0)
}

// console.log(
//   uniquePaths([
//     [0, 1, 0],
//     [0, 0, 1],
//     [1, 0, 0],
//   ])
// )
// console.log(
//   uniquePaths([
//     [0, 0],
//     [0, 0],
//   ])
// )
// console.log(
//   uniquePaths([
//     [0, 1, 1],
//     [1, 1, 0],
//   ])
// )

console.log(
  uniquePaths([
    [0, 0, 0],
    [1, 1, 0],
  ])
)
