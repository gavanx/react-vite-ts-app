var maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  dp[0][0] = matrix[0][0] === '1' ? 1 : 0
  for (let i = 1; i < m; i++) {
    dp[i][0] = matrix[i][0] === '1' ? 1 : dp[i - 1][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = matrix[0][j] === '1' ? 1 : dp[0][j - 1]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (
        matrix[i][j] === '1' &&
        matrix[i - 1][j] === '1' &&
        matrix[i][j - 1] === '1' &&
        matrix[i - 1][j - 1] === '1'
      ) {
        dp[i][j] = Math.min(Math.max(dp[i - 1][j], dp[i][j - 1], 1), i, j) + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[m - 1][n - 1] * dp[m - 1][n - 1]
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
