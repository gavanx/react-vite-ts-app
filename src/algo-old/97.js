var isInterleave = function (s1, s2, s3) {
  const m = s1.length
  const n = s2.length
  if (m + n !== s3.length) return false
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 0; i <= m; ++i) {
    for (let j = 0; j <= n; ++j) {
      const p = i + j - 1
      if (i > 0) {
        dp[i][j] = dp[i][j] || (dp[i - 1][j] && s1[i - 1] === s3[p])
      }
      if (j > 0) {
        dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p])
      }
    }
  }
  return dp[m][n]
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
console.log(isInterleave('', '', ''))
