var numWays = function (words, target) {
  const m = words[0].length
  const n = target.length
  const kk = words.length
  const mod = 1e9 + 7
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 1
  let count, c
  for (let i = 1; i <= m; ++i) {
    dp[i][0] = 1
    for (let j = 1; j <= n; ++j) {
      count = 0
      c = target[j - 1]
      for (let k = 0; k < kk; ++k) {
        if (words[k][i - 1] == c) {
          count++
        }
      }
      dp[i][j] = (dp[i - 1][j] + count * dp[i - 1][j - 1]) % mod
    }
  }
  return dp[m][n]
}

console.log(numWays(['acca', 'bbbb', 'caca'], 'aba'))
console.log(numWays(['abba', 'baab'], 'bab'))
console.log(numWays(['abcd'], 'abcd'))
console.log(numWays(['abab', 'baba', 'abba', 'baab'], 'abba'))
