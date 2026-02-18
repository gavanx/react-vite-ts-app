var minimumCost = function (nums) {
  const n = nums.length
  let ans = Infinity
  for (let i = 1; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      ans = Math.min(ans, nums[i] + nums[j])
    }
  }
  return nums[0] + ans
}
