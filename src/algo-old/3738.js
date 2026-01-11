var longestSubarray = function (nums) {
  const n = nums.length
  const dp = Array.from({ length: n }, () => [0, 0])
  dp[0] = [1, 1]
  let ans = 1
  for (let i = 1; i < n; i++) {
    if (nums[i] >= nums[i - 1]) {
      dp[i][0] = dp[i - 1][0] + 1
      dp[i][1] = dp[i - 1][1] + 1
    } else {
      dp[i][0] = 1
    }
    if (i >= 2 && nums[i] >= nums[i - 2]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 2][0] + 2)
    } else {
      dp[i][1] = Math.max(2, dp[i][1])
    }
    ans = Math.max(ans, dp[i - 1][0] + 1, dp[i][1])
  }
  return ans
}

console.log(longestSubarray([1, 2, 3, 1, 2]))
console.log(longestSubarray([2, 2, 2, 2, 2]))
console.log(longestSubarray([4]))
console.log(longestSubarray([1, 5, -10, 5]))
