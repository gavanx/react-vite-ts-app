var moveZeroes = function (nums) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    while (nums[right] === 0) {
      right--
    }
    if (left < right && nums[left] === 0) {
      nums[left] = nums[right]
      nums[right] = 0
      right--
    }
    left++
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
