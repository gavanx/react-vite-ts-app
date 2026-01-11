var maxScore = function (nums, x) {
  const n = nums.length
  const memo = new Array(n).fill(0).map(() => [undefined, undefined])
  const dfs = (i, j) => {
    if (i === n) {
      return 0
    }
    if (memo[i][j] !== undefined) {
      return memo[i][j]
    }
    if (nums[i] % 2 !== j) {
      return memo[i][j] = dfs(i + 1, j)
    }
    return memo[i][j] = Math.max(dfs(i + 1, j), dfs(i + 1, j ^ 1) - x) + nums[i]
  }
  return dfs(0, nums[0] % 2)
}

console.log(maxScore([2, 3, 6, 1, 9, 2], 5))
console.log(maxScore([2, 4, 6, 8], 3))
