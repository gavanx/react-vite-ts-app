var countSubMultisets = function (nums, l, r) {
  const mod = 1e9 + 7
  const n = nums.length
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: r + 1 }, () => 0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    const num = nums[i - 1]
    for (let j = 0; j <= r; j++) {
      dp[i][j] = dp[i - 1][j]
      if (j >= num) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - num]) % mod
      }
    }
  }
  let result = 0
  for (let j = l; j <= r; j++) {
    result = (result + dp[n][j]) % mod
  }
  return result
}

console.log(countSubMultisets([1, 2, 2, 3], 6, 6)) // 10
console.log(countSubMultisets([2, 1, 4, 2, 7], 1, 5))
console.log(countSubMultisets([1, 2, 1, 3, 5, 2], 3, 5))
