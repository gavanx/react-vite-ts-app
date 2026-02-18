var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] > target) {
      return false
    }
    if (matrix[i][n - 1] < target) {
      continue
    }
    let l = 0,
      r = n,
      mid
    while (l < r) {
      mid = Math.floor((l + r) / 2)
      if (matrix[i][mid] > target) {
        r = mid
      } else if (matrix[i][mid] < target) {
        l = mid + 1
      } else {
        return true
      }
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    5
  )
)
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30],
    ],
    20
  )
)
