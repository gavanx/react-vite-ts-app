var waysToReachTarget = function (target, types) {
  const n = types.length
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0))
  dp[0][0] = 1
  const MOD = 10 ** 9 + 7
  let m
  for (let i = 1; i <= n; i++) {
    const [count, mark] = types[i - 1]
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j]
      for (let k = 1; k <= count; k++) {
        m = k * mark
        if (j >= m) {
          dp[i][j] += dp[i - 1][j - m]
          dp[i][j] %= MOD
        }
      }
    }
  }
  return dp[n][target]
}

console.log(
  waysToReachTarget(6, [
    [6, 1],
    [3, 2],
    [2, 3],
  ])
)

console.log(
  waysToReachTarget(5, [
    [50, 1],
    [50, 2],
    [50, 5],
  ])
)

console.log(
  waysToReachTarget(18, [
    [6, 1],
    [3, 2],
    [2, 3],
  ])
)
