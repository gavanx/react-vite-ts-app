var longestAlternatingSubarray = function (nums, threshold) {
  const n = nums.length
  let ans = 0,
    i = 0
  while (i < n) {
    if (nums[i] > threshold || nums[i] % 2 !== 0) {
      i++
      continue
    }
    let start = i
    i++
    while (i < n && nums[i] <= threshold && nums[i] % 2 !== nums[i - 1] % 2) {
      i++
    }
    ans = Math.max(ans, i - start)
  }
  return ans
}

console.log(longestAlternatingSubarray([3, 2, 5, 4], 5))
console.log(longestAlternatingSubarray([1, 2], 2))
console.log(longestAlternatingSubarray([2, 3, 4, 5], 4))
console.log(longestAlternatingSubarray([2, 10, 5], 7))
