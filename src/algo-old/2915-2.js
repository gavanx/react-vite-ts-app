var lengthOfLongestSubsequence = function (nums, target) {
  const n = nums.length
  const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(-Infinity))
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= nums[i - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - nums[i - 1]] + 1)
      }
    }
  }
  return dp[n][target] === -Infinity ? -1 : dp[n][target]
}

console.log(lengthOfLongestSubsequence([1, 2, 3, 4, 5], 9))

console.log(lengthOfLongestSubsequence([4, 1, 3, 2, 1, 5], 7))

console.log(lengthOfLongestSubsequence([71, 1, 5, 4, 5], 3))
