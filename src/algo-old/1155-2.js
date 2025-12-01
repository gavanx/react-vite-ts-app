var numRollsToTarget = function (n, k, target) {
  const MOD = 10 ** 9 + 7
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let x = 1; x <= k; x++) {
        if (j - x >= 0) {
          dp[i][j] = (dp[i][j] + dp[i - 1][j - x]) % MOD
        }
      }
    }
  }
  return dp[n][target]
}

console.log(numRollsToTarget(1, 6, 3))
console.log(numRollsToTarget(2, 6, 7))
console.log(numRollsToTarget(30, 30, 500))
