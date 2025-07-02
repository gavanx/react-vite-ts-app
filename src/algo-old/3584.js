var maximumProduct = function (nums, m) {
  let leftMax = -1e5
  let leftMin = 1e5
  let i
  let ans = -1e10
  for (let j = m - 1; j < nums.length; j++) {
    i = j - m + 1
    leftMax = Math.max(leftMax, nums[i])
    leftMin = Math.min(leftMin, nums[i])
    ans = Math.max(ans, nums[j] * leftMin, nums[j] * leftMax)
  }
  return ans
}

console.log(maximumProduct([-1, -9, 2, 3, -2, -3, 1], 1))
console.log(maximumProduct([1, 3, -5, 5, 6, -4], 3))
console.log(maximumProduct([2, -1, 2, -6, 5, 2, -5, 7], 2))
console.log(maximumProduct([-1, 1], 2))
