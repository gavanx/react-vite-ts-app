var lengthOfLIS = function (nums, k) {
  const n = nums.length
  const f = new Array(n).fill(1)
  let ans = 1
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && nums[i] - nums[j] <= k) {
        f[i] = Math.max(f[i], f[j] + 1)
        ans = Math.max(ans, f[i])
      }
    }
  }
  return ans
}

console.log(lengthOfLIS([4, 2, 1, 4, 3, 4, 5, 8, 15], 3))
console.log(lengthOfLIS([7, 4, 5, 1, 8, 12, 4, 7], 5))
console.log(lengthOfLIS([1, 5], 1))
