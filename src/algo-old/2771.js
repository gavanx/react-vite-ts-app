var maxNonDecreasingLength = function (nums1, nums2) {
  const n = nums1.length
  const dp = new Array(n).fill(0).map(() => [1, 1])
  dp[0] = [1, 1]
  for (let i = 1; i < n; i++) {
    if (nums1[i] >= nums1[i - 1]) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][0] + 1)
    } else if (nums1[i] >= nums2[i - 1]) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + 1)
    } else {
      dp[i][0] = 1
    }

    if (nums2[i] >= nums1[i - 1]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + 1)
    }
    if (nums2[i] >= nums2[i - 1]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][1] + 1)
    }
  }
  let ans = 1
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i][0], dp[i][1])
  }
  return ans
}

console.log(maxNonDecreasingLength([2, 3, 1], [1, 2, 1]))
console.log(maxNonDecreasingLength([1, 3, 2, 1], [2, 2, 3, 4]))
console.log(maxNonDecreasingLength([1, 1], [2, 2]))
