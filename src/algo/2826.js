var minimumOperations = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (nums[i - 1] === nums[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return n - dp[n][n]
}
