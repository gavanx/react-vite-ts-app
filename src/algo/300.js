var lengthOfLIS = function (nums) {
  const n = nums.length
  const dp = new Array(n).fill(1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))

console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]))
