var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length
  const n = dungeon[0].length
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(Infinity))
  let min
  dp[m - 1][n] = 1
  dp[m][n - 1] = 1
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      min = Math.min(dp[i + 1][j], dp[i][j + 1])
      dp[i][j] = Math.max(min - dungeon[i][j], 1)
    }
  }
  return dp[0][0]
}

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ])
)

console.log(
  calculateMinimumHP([
    [0, -3],
    [1, -2],
  ])
)

console.log(calculateMinimumHP([[0]]))
