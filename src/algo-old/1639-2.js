var numWays = function (words, target) {
  const m = words.length
  const n = words[0].length
  const t = target.length
  const mod = 1e9 + 7
  const dp = new Array({ length: t + 1 }, () => Array.from({ length: n + 1 }, () => 0))
  dp[0][0] = 1
  for (let i = 1; i <= t; ++i) {
    for (let j = 1; j <= n; ++j) {
      dp[i][j] = dp[i][j - 1]
      if (j >= 1) {
        const c = target[i - 1]
        for (let k = 0; k < m; ++k) {
          if (words[k][j - 1] == c) {
            dp[i][j] += dp[i][j - 1]
          }
        }
      }
    }
  }
  return dp[t][n] % mod
}

console.log(numWays(['acca', 'bbbb', 'caca'], 'aba'))
console.log(numWays(['abba', 'baab'], 'bab'))
console.log(numWays(['abcd'], 'abcd'))
console.log(numWays(['abab', 'baba', 'abba', 'baab'], 'abba'))
