var rotate = function (matrix) {
  const n = matrix.length
  let i2, j2, t
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      i2 = n - j
      j2 = n - i
      t = matrix[i][j]
      matrix[i][j] = matrix[i2][j2]
      matrix[i2][j2] = t
    }
  }
  return matrix
}

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]).join(' ')
)
