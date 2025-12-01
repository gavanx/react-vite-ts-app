var numWays = function (words, target) {
  const m = words[0].length
  const n = target.length
  const kk = words.length
  const mod = 1e9 + 7
  const f = new Array(m).fill(0).map(() => new Array(26).fill(0))
  for (let j = 0; j < m; ++j) {
    for (let i = 0; i < kk; ++i) {
      f[j][words[i][j].charCodeAt() - 'a'.charCodeAt()]++
    }
  }
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  dp[0][0] = 1
  let count, c
  for (let i = 1; i <= m; ++i) {
    dp[i][0] = 1
    for (let j = 1; j <= n; ++j) {
      c = target[j - 1]
      count = f[i - 1][c.charCodeAt() - 'a'.charCodeAt()]
      dp[i][j] = (dp[i - 1][j] + count * dp[i - 1][j - 1]) % mod
    }
  }
  return dp[m][n]
}

console.log(numWays(['acca', 'bbbb', 'caca'], 'aba'))
console.log(numWays(['abba', 'baab'], 'bab'))
console.log(numWays(['abcd'], 'abcd'))
console.log(numWays(['abab', 'baba', 'abba', 'baab'], 'abba'))
