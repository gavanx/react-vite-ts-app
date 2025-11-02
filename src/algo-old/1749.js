var maxAbsoluteSum = function (nums) {
  const n = nums.length
  let max = nums[0]
  let min = nums[0]
  let sum1 = nums[0]
  let sum2 = nums[0]
  for (let i = 1; i < n; i++) {
    const num = nums[i]

    sum1 = Math.max(num, sum1 + num)
    max = Math.max(max, sum1)

    sum2 = Math.min(num, sum2 + num)
    min = Math.min(min, sum2)
  }
  return Math.max(max, -min)
}

// console.log(maxAbsoluteSum([1, -3, 2, 3, -4]) === 5)
console.log(maxAbsoluteSum([2, -5, 1, -4, 3, -2]))
