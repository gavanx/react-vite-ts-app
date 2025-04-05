var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length
  const n = dungeon[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[m - 1][n - 1] = Math.max(1 - dungeon[m - 1][n - 1], 1)
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = Math.max(dp[i + 1][n - 1] - dungeon[i][n - 1], 1)
  }
  for (let j = n - 2; j >= 0; j--) {
    dp[m - 1][j] = Math.max(dp[m - 1][j + 1] - dungeon[m - 1][j], 1)
  }
  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const res = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j]
      dp[i][j] = res <= 0 ? 1 : res
    }
  }
  return dp[0][0]
}
