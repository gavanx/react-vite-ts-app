var searchRange = function (nums, target) {
  const result = [-1, -1]
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  if (left >= nums.length || nums[left] !== target) {
    return result
  }
  result[0] = left

  right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  result[1] = right
  return result
}
