var maxScore = function (nums1, nums2, k) {
  const memo = Array.from({ length: nums1.length + 1 }, () =>
    Array.from({ length: nums2.length + 1 }, () => new Array(k + 1).fill(-Infinity))
  )
  const dfs = (i, j, k) => {
    if (memo[i][j][k] !== -Infinity) {
      return memo[i][j][k]
    }
    if (k <= 0) {
      return 0
    }
    if (i <= k - 1 || j <= k - 1) {
      return -Infinity
    }
    let res = dfs(i - 1, j - 1, k - 1) + nums1[i - 1] * nums2[j - 1]
    if (i >= k) {
      res = Math.max(res, dfs(i - 1, j, k))
    }
    if (j >= k) {
      res = Math.max(res, dfs(i, j - 1, k))
    }
    return (memo[i][j][k] = res)
  }
  return dfs(nums1.length, nums2.length, k)
}

console.log(maxScore([1, 3, 2], [4, 5, 1], 2))
console.log(maxScore([-2, 0, 5], [-3, 4, -1, 2], 2))
