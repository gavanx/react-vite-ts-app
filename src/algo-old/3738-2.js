class Solution {
  longestSubarray(nums) {
    const n = nums.length
    const f = Array.from({ length: n }, () => [0, 0])
    f[0] = [1, 1]
    let ans = 1
    for (let i = 1; i < n; i++) {
      if (nums[i - 1] <= nums[i]) {
        f[i][0] = f[i - 1][0] + 1
        f[i][1] = f[i - 1][1] + 1
      } else {
        f[i][0] = 1
      }
      if (i >= 2 && nums[i - 2] <= nums[i]) {
        f[i][1] = Math.max(f[i][1], f[i - 2][0] + 2)
      } else {
        f[i][1] = Math.max(f[i][1], 2)
      }

      ans = Math.max(ans, f[i - 1][0] + 1, f[i][1])
    }

    return ans
  }
}

// 测试用例
const solution = new Solution()
// console.log(solution.longestSubarray([1, 2, 3, 2, 3])) // 预期输出: 4
// console.log(solution.longestSubarray([5, 4, 3, 2, 1])) // 预期输出: 2
// console.log(solution.longestSubarray([1, 1, 1, 1, 1])) // 预期输出: 5

console.log(solution.longestSubarray([1, 2, 3, 1, 2]))
console.log(solution.longestSubarray([2, 2, 2, 2, 2]))
console.log(solution.longestSubarray([4]))
console.log(solution.longestSubarray([1, 5, -10, 5]))