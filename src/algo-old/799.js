var champagneTower = function (poured, query_row, query_glass) {
  const dp = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0))
  dp[0][0] = poured
  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      const overflow = Math.max(dp[i][j] - 1, 0) / 2
      dp[i + 1][j] += overflow
      dp[i + 1][j + 1] += overflow
    }
  }
  return Math.min(1, dp[query_row][query_glass])
}

console.log(champagneTower(1, 1, 1))
console.log(champagneTower(2, 1, 1))
console.log(champagneTower(100000009, 33, 17))
