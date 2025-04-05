var findTargetSumWays = function (nums, target) {
  const n = nums.length
  const f = (i, t) => {
    if (i === n - 1) {
      return nums[i] === t || -nums[i] === t ? (t === 0 ? 2 : 1) : 0
    }
    return f(i + 1, t + nums[i]) + f(i + 1, t - nums[i])
  }
  return f(0, target)
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))
console.log(findTargetSumWays([1], 1))
console.log(findTargetSumWays([1, 0], 1))
