function securityCheck(capacities, k) {
  const MOD = 1e9 + 7
  const dp = new Array(k + 1).fill(0)
  dp[0] = 1

  for (const capacity of capacities) {
    const x = capacity - 1
    for (let s = k; s >= x; s--) {
      dp[s] = (dp[s] + dp[s - x]) % MOD
    }
  }

  return dp[k]
}

console.log(securityCheck([2, 2, 3], 2))
console.log(securityCheck([3, 3], 3))
console.log(securityCheck([4, 3, 2, 2], 6))
