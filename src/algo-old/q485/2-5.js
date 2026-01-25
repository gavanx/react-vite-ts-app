function maxCapacity(costs, capacity, budget) {
  const n = costs.length
  const dp = Array.from({ length: n + 1 }, () => new Array({ legnth: budget + 1 }, () => 0))
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= budget; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= costs[i]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - costs[i]] + capacity[i])
      }
    }
  }
  return dp[n][budget]
}

console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8))
console.log(maxCapacity([3, 5, 7, 4], [2, 4, 3, 6], 7))
console.log(maxCapacity([2, 2, 2], [3, 5, 4], 5))
