/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let ans = 0
  let left = 0
  const cnt = new Map()
  for (let right = 0; right < nums.length; right++) {
    const x = nums[right]
    cnt.set(x, (cnt.get(x) || 0) + 1)
    while (true) {
      let minVal = Infinity
      let maxVal = -Infinity

      for (const [key] of cnt) {
        const num = key
        minVal = Math.min(minVal, num)
        maxVal = Math.max(maxVal, num)
      }
      if (maxVal - minVal <= 2) {
        break
      }
      const y = nums[left]
      const count = cnt.get(y)
      if (count === 1) {
        cnt.delete(y)
      } else {
        cnt.set(y, count - 1)
      }
      left++
    }
    ans += right - left + 1
  }
  return ans
}
