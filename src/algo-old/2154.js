var findFinalValue = function (nums, original) {
  const dp = Array.from({ length: 1001 }, () => false)
  for (const x of nums) {
    dp[x] = true
  }
  while (dp[original]) {
    original *= 2
  }
  return original
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3))
console.log(findFinalValue([2, 7, 9], 4))
