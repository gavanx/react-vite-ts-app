var maximumProduct = function (nums, m) {
  if (nums.length === 1) {
    let m = Math.min(nums)
    let n = Math.max(nums)
    return Math.max(m * m, n * n)
  }
  let ans = -Infinity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + m - 1; j < nums.length; j++) {
      ans = Math.max(ans, nums[i] * nums[j])
    }
  }
  return ans
}

console.log(maximumProduct([-1, -9, 2, 3, -2, -3, 1], 1))
console.log(maximumProduct([1, 3, -5, 5, 6, -4], 3))
console.log(maximumProduct([2, -1, 2, -6, 5, 2, -5, 7], 2))
console.log(maximumProduct([-1, 1], 2))
