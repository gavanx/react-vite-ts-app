var minimumTotal = function (triangle) {
  const m = triangle.length
  const n = triangle[m - 1].length
  const dp = Array.from({ length: m }, () => Array(n).fill(0))
  dp[0][0] = triangle[0][0]
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
  }
  for (let j = 1; j < n; j++) {
    dp[j][j] = dp[j - 1][j - 1] + triangle[j][j]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
    }
  }
  return Math.min(...dp[m - 1])
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]))
console.log(minimumTotal([[-10]]))
