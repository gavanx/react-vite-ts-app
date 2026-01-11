class Solution {
  maxNonDecreasingLength(nums1, nums2) {
    const n = nums1.length
    const nums = [nums1, nums2]

    const f = Array.from({ length: n }, () => [1, 1])

    for (let i = 1; i < n; i++) {
      for (let j = 0; j < 2; j++) {
        if (nums1[i - 1] <= nums[j][i]) {
          f[i][j] = f[i - 1][0] + 1
        }
        if (nums2[i - 1] <= nums[j][i]) {
          f[i][j] = Math.max(f[i][j], f[i - 1][1] + 1)
        }
      }
    }

    let maxLen = 0
    for (const row of f) {
      maxLen = Math.max(maxLen, ...row)
    }
    return maxLen
  }
}

// 测试用例
const solution = new Solution()
console.log(solution.maxNonDecreasingLength([1, 3, 2, 1], [2, 2, 3, 4])) // 预期输出: 4

console.log(solution.maxNonDecreasingLength([5, 4, 3, 2, 1], [1, 2, 3, 4, 5])) // 预期输出: 2

console.log(solution.maxNonDecreasingLength([1, 1, 1], [2, 2, 2])) // 预期输出: 3
