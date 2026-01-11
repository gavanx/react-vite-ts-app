var wiggleMaxLength = function (nums) {
  const n = nums.length
  const dp = Array.from({ length: n + 1 }, () => [0, 1, 1])
  dp[0] = [1, 1, 1]
  dp[1] = [1, nums[1] > nums[0] ? 2 : 1, nums[1] < nums[0] ? 2 : 1]
  for (let i = 1; i < n; i++) {
    dp[i + 1][0] = Math.max(dp[i][0], dp[i][1], dp[i][2])
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i + 1][1] = Math.max(dp[i + 1][1], dp[j][2] + 1)
      } else if (nums[i] < nums[j]) {
        dp[i + 1][2] = Math.max(dp[i + 1][2], dp[j][1] + 1)
      }
    }
  }
  return Math.max(dp[n][0], dp[n][1], dp[n][2])
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
