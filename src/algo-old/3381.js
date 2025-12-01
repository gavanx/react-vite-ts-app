var maxSubarraySum = function (nums, k) {
  const n = nums.length
  const sum = [0]
  let s = 0
  for (let i = 0; i < n; i++) {
    s += nums[i]
    sum[i + 1] = s
  }
  let res = -Infinity
  for (let i = k; i <= n; i++) {
    for (let j = i - k; j >= 0; j -= k) {
      console.log(sum[i], sum[j], i, j)
      res = Math.max(res, sum[i] - sum[j])
    }
  }
  return res
}

// console.log(maxSubarraySum([1, 2], 1))
// console.log(maxSubarraySum([-1, -2, -3, -4, -5], 4))
// console.log(maxSubarraySum([-5, 1, 2, -3, 4], 2))
console.log(maxSubarraySum([9, -11, 15], 2))
