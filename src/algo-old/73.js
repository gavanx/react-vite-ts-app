var setZeroes = function (matrix) {
  let r = new Set()
  let c = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        r.add(i)
        c.add(j)
        break
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (r.has(i) || c.has(j)) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]).join(','))