var maximumTotalCost = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(-Infinity)
  dp[0] = 0
  dp[1] = nums[0]
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i - 1], dp[i - 2] - nums[i - 1] + nums[i - 2])
  }
  return dp[n]
}

console.log(maximumTotalCost([1, -2, 3, 4]))
