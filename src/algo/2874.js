var maximumTripletValue = function (nums) {
  const len = nums.length
  let i,
    j,
    k,
    ans = 0,
    left = [],
    right = []
  for (i = 0; i < len; i++) {
    left[i] = Math.max(left[i - 1] || 0, nums[i])
    j = len - i - 1
    right[j] = Math.max(right[j + 1] || 0, nums[j])
  }
  for (j = 1; j < len - 1; j++) {
    ans = Math.max(ans, (left[j - 1] - nums[j]) * right[j + 1])
  }
  return ans
}

console.log(maximumTripletValue([12, 6, 1, 2, 7]) === 77)
console.log(maximumTripletValue([1, 10, 3, 4, 19]) === 133)
console.log(maximumTripletValue([1, 2, 3]) === 0)
