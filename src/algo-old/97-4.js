var isInterleave = function (s1, s2, s3) {
  const m = s1.length
  const n = s2.length
  if (m + n !== s3.length) return false
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      const p = i + j + 1
      if (s1[i - 1] === s3[p]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j]
      } else if (s2[j - 1] === s3[p]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1]
      } else {
        return false
      }
    }
  }
  return dp[m][n]
}

console.log(isInterleave('aabcc', 'dbbca', 'aadbbcbcac'))
console.log(isInterleave('aabcc', 'dbbca', 'aadbbbaccc'))
console.log(isInterleave('', '', ''))
