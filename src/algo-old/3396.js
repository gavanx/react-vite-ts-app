/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const seen = new Set()
  for (let i = nums.length - 1; i >= 0; i--) {
    if (seen.has(nums[i])) {
      return Math.round((i + 1) / 3)
    }
    seen.add(nums[i])
  }
  return 0
}
