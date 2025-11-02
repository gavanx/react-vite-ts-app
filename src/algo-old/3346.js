var maxFrequency = function (nums, k, numOperations) {
  nums = nums.sort((a, b) => a - b)
  const dfs = (index, min, max, numOperations) => {
    if (index === nums.length || numOperations < 0) {
      return 0
    }
    const res1 = dfs(index + 1, min, max, numOperations)
    min = Math.max(min, nums[index] - k)
    max = Math.min(max, nums[index] + k)
    if (min <= max && numOperations > 0) {
      const res2 =
        1 +
        dfs(
          index + 1,
          Math.max(min, nums[index] - k),
          Math.max(max, nums[index]),
          numOperations - 1
        )
      return Math.max(res1, res2)
    }
    return res1
  }
  return dfs(0, -Number.MAX_VALUE, Number.MAX_VALUE, numOperations)
}

console.log(maxFrequency([1, 4, 5], 1, 2))
console.log(maxFrequency([5, 11, 20, 20], 5, 1))
