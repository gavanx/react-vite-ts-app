var findMaxAverage = function (nums, k) {
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let maxSum = sum
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k]
    maxSum = Math.max(maxSum, sum)
  }
  return maxSum / k
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))
console.log(findMaxAverage([5], 1))
