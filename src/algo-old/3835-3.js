/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const minQueue = []
  const maxQueue = []
  let ans = 0
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    const x = nums[right]

    while (minQueue.length > 0 && x <= nums[minQueue[minQueue.length - 1]]) {
      minQueue.pop()
    }
    minQueue.push(right)

    while (maxQueue.length > 0 && x >= nums[maxQueue[maxQueue.length - 1]]) {
      maxQueue.pop()
    }
    maxQueue.push(right)

    // 检查条件：(最大值 - 最小值) * 窗口长度 <= k
    while ((nums[maxQueue[0]] - nums[minQueue[0]]) * (right - left + 1) > k) {
      if (minQueue[0] === left) {
        minQueue.shift()
      }
      if (maxQueue[0] === left) {
        maxQueue.shift()
      }
      left++
    }

    ans += right - left + 1
  }

  return ans
}
