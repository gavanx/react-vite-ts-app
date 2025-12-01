var maxRemovals = function (source, pattern, targetIndices) {
  const n = source.length
  const m = pattern.length
  const set = new Set(targetIndices)
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => -Infinity))
  dp[0][0] = 0
  let has
  for (let i = 1; i <= n; i++) {
    has = set.has(i - 1) ? 1 : 0
    dp[i][0] = dp[i - 1][0] + has
    for (let j = 1; j <= m; j++) {
      dp[i][j] = dp[i - 1][j] + has
      if (source[i - 1] === pattern[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1])
      }
    }
  }
  return Math.max(0, dp[n][m])
}

console.log(maxRemovals('abbaa', 'aba', [0, 1, 2]))

console.log(maxRemovals('bcda', 'd', [0, 3]))
console.log(maxRemovals('dda', 'dda', [0, 1, 2]))

console.log(maxRemovals('yeyeykyded', 'yeyyd', [0, 2, 3, 4]))
console.log(maxRemovals('ekk', 'kk', [1]))
