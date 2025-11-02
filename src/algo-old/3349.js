var hasIncreasingSubarrays = function (nums, k) {
  const n = nums.length
  if (k === 1 && n > k) {
    return true
  }
  let k1 = 1
  let k2 = 0
  for (let i = 1; i < n; ++i) {
    if (nums[i] > nums[i - 1]) {
      if (k2 > 0) {
        k2++
      } else {
        k1++
      }
      if (k1 >= 2 * k || (k1 >= k && k2 >= k)) {
        return true
      }
    } else {
      if (k2 > 0) {
        k1 = 1
        k2 = 0
      } else if (k1 >= k) {
        k2 = 1
      } else {
        k1 = 1
      }
    }
  }
  return false
}

// console.log(hasIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1], 3))
// console.log(hasIncreasingSubarrays([1, 2, 3, 4, 4, 4, 4, 5, 6, 7], 5))
// console.log(hasIncreasingSubarrays([-15, 19], 1))
console.log(hasIncreasingSubarrays([-15, -13, 4, 7], 2))
