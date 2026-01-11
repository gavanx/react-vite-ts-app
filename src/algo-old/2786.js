var maxScore = function (nums, x) {
  const n = nums.length
  let ans = -Infinity
  const dfs = (i, s) => {
    if (i === n - 1) {
      ans = Math.max(ans, s)
      return
    }
    for (let j = i + 1; j < n; j++) {
      if (nums[i] % 2 === nums[j] % 2) {
        dfs(j, s + nums[j] - x)
      } else {
        dfs(j, s + nums[j])
      }
    }
  }
  dfs(0, nums[0])
  return ans
}

console.log(maxScore([2, 3, 6, 1, 9, 2], 5))
