var maxMatrixSum = function (matrix) {
  let total = 0
  let negCnt = 0
  let min = Infinity
  for (const row of matrix) {
    for (let x of row) {
      if (x < 0) {
        negCnt++
        x = -x
      }
      min = Math.min(min, x)
      total += x
    }
  }

  if (negCnt % 2) {
    total -= min * 2
  }
  return total
}
