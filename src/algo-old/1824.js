var minSideJumps = function (obstacles) {
  const n = obstacles.length
  const dp = Array.from({ length: n + 1 }, () => Array(4).fill(Infinity))
  dp[0][1] = 1
  dp[0][2] = 0
  dp[0][3] = 1
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= 3; j++) {
      if (obstacles[i] !== j) {
        dp[i][j] = dp[i - 1][j]
        for (let k = 1; k <= 3; k++) {
          if (k !== j && obstacles[i - 1] !== j) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + 1)
          }
        }
      }
    }
  }
  return Math.min(dp[n - 1][1], dp[n - 1][2], dp[n - 1][3])
}

console.log(minSideJumps([0, 1, 2, 3, 0]))
console.log(minSideJumps([0, 1, 1, 3, 3, 0]))
console.log(minSideJumps([0, 2, 1, 0, 3, 0]))
