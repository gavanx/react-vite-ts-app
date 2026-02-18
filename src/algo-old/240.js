var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let l = 0,
    r = m
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (matrix[mid][0] > target) {
      r = mid
    } else if (matrix[mid][0] < target) {
      l = mid + 1
    } else {
      return true
    }
  }
  let l2 = 0
  r = n
  while (l2 < r) {
    const mid = Math.floor((l2 + r) / 2)
    if (matrix[l][mid] > target) {
      r = mid
    } else if (matrix[l][mid] < target) {
      l2 = mid + 1
    } else {
      return true
    }
  }
  return false
}
// console.log(
//   searchMatrix(
//     [
//       [1, 4, 7, 11, 15],
//       [2, 5, 8, 12, 19],
//       [3, 6, 9, 16, 22],
//       [10, 13, 14, 17, 24],
//       [18, 21, 23, 26, 30],
//     ],
//     5
//   )
// )
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
