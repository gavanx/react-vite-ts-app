var maxAlternatingSum = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(0).map(() => [0, -Infinity])
  for (let i = 0; i < n; i++) {
    dp[i + 1][0] = Math.max(dp[i][0], dp[i][1] - nums[i])
    dp[i + 1][1] = Math.max(dp[i][1], dp[i][0] + nums[i])
  }
  return dp[n][1]
}

console.log(maxAlternatingSum([4, 2, 5, 3]))
console.log(maxAlternatingSum([5, 6, 7, 8]))
console.log(maxAlternatingSum([6, 2, 1, 2, 4, 5]))
