var countNegatives = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = 0
  let max = n - 1
  for (let i = 0; i < m; i++) {
    for (let j = max; j >= -1; j--) {
      if (j === -1) {
        ans += n * (m - i)
        return ans
      } else if (grid[i][j] >= 0) {
        ans += n - 1 - j
        max = j
        break
      }
    }
  }
  return ans
}

console.log(
  countNegatives([
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3],
  ])
)
console.log(
  countNegatives([
    [3, 2],
    [1, 0],
  ])
)
