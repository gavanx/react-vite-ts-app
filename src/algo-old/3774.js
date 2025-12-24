var absDifference = function (nums, k) {
  nums = nums.sort((a, b) => b - a)
  let s = 0
  for (let i = 0; i < k; i++) {
    s += nums[i] - nums[nums.length - 1 - i]
  }
  return s
}

console.log(absDifference([5, 2, 2, 4], 2))
console.log(absDifference([100], 1))
