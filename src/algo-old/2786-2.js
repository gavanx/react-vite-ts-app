var maxScore = function (nums, x) {
  const n = nums.length
  const dp = new Array(n).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j], dp[j] + nums[i] - (nums[i] % 2 === nums[j] % 2 ? x : 0))
    }
  }
  return dp[n - 1]
}

console.log(maxScore([2, 3, 6, 1, 9, 2], 5))
