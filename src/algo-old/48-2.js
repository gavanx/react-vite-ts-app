var rotate = function (matrix) {
  const n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = tmp
    }
  }

  for (const row of matrix) {
    row.reverse()
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
