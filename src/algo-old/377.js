var combinationSum4 = function (nums, target) {
  const dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; i++) {
    for (let n of nums) {
      if (i - n >= 0) {
        dp[i] += dp[i - n]
      }
    }
  }
  return dp[target]
}

console.log(combinationSum4([1, 2, 3], 4))
console.log(combinationSum4([9], 3))
