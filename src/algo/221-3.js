var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  let maxSide = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        maxSide = Math.max(maxSide, dp[i][j])
      }
    }
  }
  return maxSide * maxSide
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
)

console.log(
  maximalSquare([
    ['0', '1'],
    ['1', '0'],
  ])
)

console.log(maximalSquare([['0']]))
