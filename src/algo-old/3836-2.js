var maxScore = function (nums1, nums2, k) {
  const m = nums1.length
  const n = nums2.length
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => new Array(k + 1).fill(-Infinity))
  )
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j][0] = 0
    }
  }
  for (let k2 = 1; k2 <= k; k2++) {
    for (let i = k2; i <= m; i++) {
      for (let j = k2; j <= n; j++) {
        dp[i][j][k2] = Math.max(
          dp[i - 1][j - 1][k2 - 1] + nums1[i - 1] * nums2[j - 1],
          dp[i - 1][j][k2],
          dp[i][j - 1][k2]
        )
      }
    }
  }
  return dp[m][n][k]
}

console.log(maxScore([1, 3, 2], [4, 5, 1], 2))
console.log(maxScore([-2, 0, 5], [-3, 4, -1, 2], 2))
