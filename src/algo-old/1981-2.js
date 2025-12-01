var minimizeTheDifference = function (mat, target) {
  const m = mat.length
  const n = mat[0].length
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: 2 * target + 1 }, () => false)
  )
  dp[0][0] = true
  for (let i = 1; i <= m; i++) {
    for (let j = 0; j <= 2 * target; j++) {
      for (const num of mat[i - 1]) {
        if (j - num >= 0 && dp[i - 1][j - num]) {
          dp[i][j] = true
          break
        }
      }
    }
  }
  let minDiff = Infinity
  for (let j = 0; j <= 2 * target; j++) {
    if (dp[m][j]) {
      minDiff = Math.min(minDiff, Math.abs(j - target))
    }
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
