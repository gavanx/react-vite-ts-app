var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length
  const n = dungeon[0].length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Infinity))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dungeon[i - 1][j - 1]
    }
  }
  if (dp[m][n] >= 0) {
  }
}
