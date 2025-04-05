var maxProduct = function (nums) {
  const n = nums.length
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]
  for (let i = 1; i < n; i++) {
    const temp = max
    max = Math.max(max * nums[i], min * nums[i], nums[i])
    min = Math.min(temp * nums[i], min * nums[i], nums[i])
    res = Math.max(res, max)
  }
  return res
}

console.log(maxProduct([2, 3, -2, 4]))
console.log(maxProduct([-2, 0, -1]))
console.log(maxProduct([-2, 3, -4]))
