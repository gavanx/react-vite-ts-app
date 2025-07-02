var specialTriplets = function (nums) {
  let i, j, k, s
  let count = 0
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      s = nums[j] + nums[j]
      if (nums[i] === s) {
        for (k = j + 1; k < nums.length; k++) {
          if (nums[k] === s) {
            count++
          }
        }
      }
    }
  }
  return count
}
