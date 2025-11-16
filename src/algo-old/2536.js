var rangeAddQueries = function (n, queries) {
  const res = Array.from({ length: n }, () => new Array(n).fill(0))
  const dp = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0))
  for (const [r1, c1, r2, c2] of queries) {
    dp[r1 + 1][c1 + 1]++
    dp[r1 + 1][c2 + 2]--
    dp[r2 + 2][c1 + 1]--
    dp[r2 + 2][c2 + 2]++
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] += dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1]
      res[i - 1][j - 1] = dp[i][j]
    }
  }
  return res
}
console.log(
  rangeAddQueries(3, [
    [1, 1, 2, 2],
    [0, 0, 1, 1],
  ]).join('\n')
)

console.log(rangeAddQueries(2, [[0, 0, 1, 1]]).join('\n'))
