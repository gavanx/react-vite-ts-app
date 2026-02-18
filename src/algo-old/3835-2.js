/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums, k) {
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
      if ((maxVal - minVal) * (right - left + 1) <= k) {
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

console.log(countSubarrays([1, 3, 2], 4))
console.log(countSubarrays([5, 5, 5, 5], 0))
console.log(countSubarrays([1, 2, 3], 0))