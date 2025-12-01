var minimizeTheDifference = function (mat, target) {
  const m = mat.length
  const n = mat[0].length
  let possibleSums = new Set([0])
  for (let i = 0; i < m; i++) {
    const newPossibleSums = new Set()
    for (const num of mat[i]) {
      for (const sum of possibleSums) {
        newPossibleSums.add(sum + num)
      }
    }
    possibleSums = newPossibleSums
  }
  let minDiff = Infinity
  for (const sum of possibleSums) {
    minDiff = Math.min(minDiff, Math.abs(sum - target))
  }
  return minDiff
}

console.time('x')
console.log(
  minimizeTheDifference(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    13
  )
) // 0

console.log(minimizeTheDifference([[1], [2], [3]], 100)) // 94
console.log(minimizeTheDifference([[1, 2, 9, 8, 7]], 6)) // 0

console.timeEnd('x')
