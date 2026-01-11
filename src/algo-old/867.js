var transpose = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const res = new Array(n).fill(0).map(() => [])
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res[i][j] = matrix[j][i]
    }
  }
  return res
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]).join('-')
)

console.log(
  transpose([[1, 2, 3], [4, 5, 6]]).join('-')
)