var maxSubArray = function (nums) {
  const n = nums.length
  let max = nums[0]
  let sum = nums[0]
  for (let i = 1; i < n; i++) {
    if (sum < 0) {
      sum = nums[i]
    } else {
      sum += nums[i]
    }
    max = Math.max(max, sum)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6)
console.log(maxSubArray([1]) === 1)
console.log(maxSubArray([5, 4, -1, 7, 8]) === 23)
