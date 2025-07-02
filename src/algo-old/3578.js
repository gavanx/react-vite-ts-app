var countPartitions = function (nums, k) {
  const f = new Array(nums.length + 1).fill(0)
  f[0] = 1
  f[1] = 1
  let max, min
  for (let i = 2; i <= nums.length; i++) {
    max = min = nums[i - 1]
    f[i] += f[i - 1]
    for (let j = i - 1; j >= 1; j--) {
      max = Math.max(max, nums[j - 1])
      min = Math.min(min, nums[j - 1])
      if (max - min > k) {
        break
      }
      f[i] += f[j]
    }
  }
  return f[nums.length]
}

console.log(countPartitions([9, 4, 1, 3, 7], 4))
