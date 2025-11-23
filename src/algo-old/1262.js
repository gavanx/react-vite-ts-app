var maxSumDivThree = function (nums) {
  const n = nums.length
  const dp = Array.from({ length: n }, () => Array(3).fill(0))
  dp[0][nums[0] % 3] = nums[0]
  let num, mod
  for (let i = 1; i < n; i++) {
    num = nums[i]
    for (let j = 0; j < 3; j++) {
      dp[i][j] = dp[i - 1][j]
    }
    mod = num % 3
    dp[i][mod] = Math.max(dp[i][mod], dp[i - 1][(mod + 3 - 1) % 3] + num)
  }
  return dp[n - 1][0]
}

console.log(maxSumDivThree([3, 6, 5, 1, 8]))

console.log(maxSumDivThree([4]))
console.log(maxSumDivThree([1, 2, 3, 4, 4]))
