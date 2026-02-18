var longestAlternatingSubarray = function (nums, threshold) {
  const n = nums.length
  let max = 0
  let count = 0
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      count = 1
      max = Math.max(max, count)
      let flag = 1
      for (let j = i + 1; j < n; j++) {
        if (nums[j] % 2 === flag && nums[j] <= threshold) {
          flag = 1 - flag
          count++
          max = Math.max(max, count)
        } else {
          i = j
          break
        }
      }
    } else {
      count = 0
    }
  }
  return max
}

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5))
console.log(longestAlternatingSubarray([1, 2], 2))
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4))
console.log(longestAlternatingSubarray([2, 10, 5], 7))
