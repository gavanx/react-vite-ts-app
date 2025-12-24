var validPartition = function (nums) {
  const n = nums.length
  const f = Array(n + 1).fill(false)
  f[0] = true
  for (let i = 1; i < n; i++) {
    f[i + 1] =
      (f[i - 1] && nums[i] === nums[i - 1]) ||
      (i > 1 &&
        f[i - 2] &&
        ((nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) ||
          (nums[i] === nums[i - 1] + 1 && nums[i] === nums[i - 2] + 2)))
  }
  return f[n]
}
console.log(validPartition([4, 4, 4, 5, 6]))
console.log(validPartition([1, 1, 1, 2]))
