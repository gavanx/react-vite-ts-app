var numOfWays = function (n) {
  const MOD = 1000000007n
  const dp = new Array(n + 1).fill(0)
  dp[1] = 12n
  dp[2] = 54n
  for (let i = 3; i <= n; i++) {
    dp[i] = (5n * dp[i - 1] - 2n * dp[i - 2] + MOD) % MOD
  }
  return Number(dp[n] > 0 ? dp[n] : dp[n] + MOD)
}

console.log(numOfWays(1))
console.log(numOfWays(2))
console.log(numOfWays(3))
console.log(numOfWays(7))
console.log(numOfWays(5000))
console.log(numOfWays(17))
