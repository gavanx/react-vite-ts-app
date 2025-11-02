var maxIncreasingSubarrays = function (nums) {
  const n = nums.length
  let ans = 1
  let k1 = 1
  let k2 = 0
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      if (k2 === 0) {
        k1++
        ans = Math.max(ans, Math.floor(k1 / 2))
      } else {
        k2++
        ans = Math.max(ans, Math.min(k1, k2), Math.floor(k1 / 2), Math.floor(k2 / 2))
      }
    } else {
      if (k2 > 0) {
        ans = Math.max(ans, Math.min(k1, k2), Math.floor(k1 / 2), Math.floor(k2 / 2))
        k1 = k2
        k2 = 1
      } else {
        ans = Math.max(ans, Math.floor(k1 / 2))
        k2 = 1
      }
    }
  }
  return ans
}

// console.log(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]))
// console.log(maxIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7]) === 2)
console.log(maxIncreasingSubarrays([19, 4, 19, 6, 18]))
