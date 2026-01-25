var minimumPrefixLength = function (nums) {
  const n = nums.length
  for (let i = n - 1; i > 0; i--) {
    if (nums[i - 1] >= nums[i]) {
      return i
    }
  }
  return 0
}
