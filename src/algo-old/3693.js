var climbStairs = function (n, costs) {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = costs[0] + 1
  dp[2] = Math.min(dp[1] + costs[1] + 1, costs[1] + 4)
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.min(
      dp[i - 1] + costs[i - 1] + 1,
      dp[i - 2] + costs[i - 1] + 4,
      dp[i - 3] + costs[i - 1] + 9
    )
  }
  return dp[n]
}

console.log(climbStairs(4, [1, 2, 3, 4]))
console.log(climbStairs(4, [5, 1, 6, 2]))
