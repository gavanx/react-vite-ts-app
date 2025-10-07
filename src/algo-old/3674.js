var minOperations = function (nums) {
  for (const n of nums) {
    if (n !== nums[0]) {
      return 1
    }
  }
  return 0
}
