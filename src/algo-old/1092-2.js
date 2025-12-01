var shortestCommonSupersequence = function (str1, str2) {
  const m = str1.length
  const n = str2.length
  const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => ''))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + str1[i - 1]
      } else {
        dp[i][j] =
          dp[i - 1][j].length < dp[i][j - 1].length
            ? dp[i - 1][j] + str1[i - 1]
            : dp[i][j - 1] + str2[j - 1]
      }
    }
  }
  return dp[m][n]
}

console.log(shortestCommonSupersequence('abac', 'cab'))
console.log(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa'))
