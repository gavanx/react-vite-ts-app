var maxProduct = function (nums) {
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]
  let tmp
  for (let i = 1; i < nums.length; i++) {
    tmp = max
    max = Math.max(nums[i], Math.max(max * nums[i], min * nums[i]))
    min = Math.min(nums[i], Math.min(tmp * nums[i], min * nums[i]))
    res = Math.max(res, max)
  }
  return res
}

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 0, -1]))
