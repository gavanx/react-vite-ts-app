var rob = function (nums, colors) {
  const n = nums.length
  const dp = new Array(n + 1).fill(0).map(() => [0, 0])
  for (let i = 0; i < n; i++) {
    dp[i + 1][0] = Math.max(dp[i][0], dp[i][1])
    dp[i + 1][1] = nums[i] + dp[i][0]
    if (colors[i] !== colors[i - 1]) {
      dp[i + 1][1] = Math.max(dp[i + 1][1], nums[i] + dp[i][1])
    }
  }
  return Math.max(dp[n][0], dp[n][1])
}

console.log(rob([1, 4, 3, 5], [1, 1, 2, 2]))
