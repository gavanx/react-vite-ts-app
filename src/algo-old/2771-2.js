class Solution {
  maxNonDecreasingLength(nums1, nums2) {
    const nums = [nums1, nums2]
    const memo = new Map()

    const dfs = (i, j) => {
      const key = `${i},${j}`
      if (memo.has(key)) return memo.get(key)

      if (i === 0) {
        memo.set(key, 1)
        return 1
      }

      let res = 1
      if (nums1[i - 1] <= nums[j][i]) {
        res = dfs(i - 1, 0) + 1
      }
      if (nums2[i - 1] <= nums[j][i]) {
        res = Math.max(res, dfs(i - 1, 1) + 1)
      }

      memo.set(key, res)
      return res
    }

    let maxLen = 0
    const n = nums1.length
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < n; i++) {
        maxLen = Math.max(maxLen, dfs(i, j))
      }
    }
    return maxLen
  }
}

// 测试用例
const solution = new Solution()
console.log(solution.maxNonDecreasingLength([1, 3, 2, 1], [2, 2, 3, 4])) // 预期输出: 4

console.log(solution.maxNonDecreasingLength([5, 4, 3, 2, 1], [1, 2, 3, 4, 5])) // 预期输出: 2

console.log(solution.maxNonDecreasingLength([2, 3, 1], [1, 2, 1]))