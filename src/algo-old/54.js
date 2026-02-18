var spiralOrder = function (matrix) {
  let r1 = 0,
    r2 = matrix.length - 1
  let c1 = 0,
    c2 = matrix[0].length - 1
  let size = (r2 + 1) * (c2 + 1)
  let i = 0,
    j = 0
  const dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  let d = 0
  let res = []
  while (size > 0) {
    res.push(matrix[i][j])
    size--
    i += dirs[d][0]
    j += dirs[d][1]
    if (i < r1 || i > r2 || j < c1 || j > c2) {
      d = (d + 1) % 4
      if (i < r1) {
        r1--
        c1++
      } else if (i > r2) {
        r2--
        c2--
      } else if (j < c1) {
        c1++
        r2--
      } else if (j > c2) {
        r1++
        c2--
      }
    }
  }
  return res
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
