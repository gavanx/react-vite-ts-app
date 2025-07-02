var minAbsDiff = function (grid, k) {
  const m = grid.length
  const n = grid[0].length
  let s = new Set()
  let ret = new Array(m - k + 1).fill(0).map(() => new Array(n - k + 1))
  const f = (s) => {
    if (s.size === 1) {
      return 0
    }
    let ans = Infinity
    let arr = [...s].sort((a, b) => a - b)
    for (let i = 0; i < arr.length - 1; i++) {
      ans = Math.min(ans, arr[i + 1] - arr[i])
    }
    return ans
  }
  for (let i = 0; i <= m - k; i++) {
    for (let j = 0; j <= n - k; j++) {
      s.clear()
      for (let x = i; x < i + k; x++) {
        for (let y = j; y < j + k; y++) {
          s.add(grid[x][y])
        }
      }
      ret[i][j] = f(s)
    }
  }
  return ret
}

// console.log(
//   minAbsDiff(
//     [
//       [1, 8],
//       [3, -2],
//     ],
//     2
//   ).toString()
// )

// console.log(minAbsDiff([[3, -1]], 1).toString())
console.log(
  minAbsDiff(
    [
      [1, -2, 3],
      [2, 3, 5],
    ],
    2
  ).toString()
)
