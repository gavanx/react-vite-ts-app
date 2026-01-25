var threeSum = function (nums) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const ans = []
  console.log(nums)
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    if (nums[i] > 0) {
      break
    }
    let l = i + 1,
      r = n - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === 0) {
        ans.push([nums[i], nums[l], nums[r]])
        while (l < r && nums[l] == nums[l + 1]) {
          l++
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--
        }
      } else if (sum > 0) {
        r--
      } else {
        l++
      }
    }
  }
  return ans
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]).join('\n'))
// console.log(threeSum([0, 1, 1]).join('\n'))
// console.log(threeSum([0, 0, 0]).join('\n'))
console.log(threeSum([2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10]).join('\n'))
