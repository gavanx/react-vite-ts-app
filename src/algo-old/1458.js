var maxDotProduct = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-Infinity))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const product = nums1[i - 1] * nums2[j - 1]
      dp[i][j] = Math.max(dp[i - 1][j - 1] + product, product, dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[m][n]
}

console.log(maxDotProduct([2, 1, -2, 5], [3, 0, -6]))
console.log(maxDotProduct([3, -2], [2, -6, 7]))
console.log(maxDotProduct([-1, -1], [1, 1]))
