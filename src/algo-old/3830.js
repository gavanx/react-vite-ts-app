var longestAlternating = function (nums) {
  const n = nums.length
  const dfs = (i, d, inc, memo) => {
    if (i === 0) {
      return 1
    }
    if (memo[inc ? 1 : 0][i][d ? 1 : 0] > 0) {
      return memo[inc ? 1 : 0][i][d ? 1 : 0]
    }
    let res = 1
    if (nums[i - 1] !== nums[i] && nums[i - 1] < nums[i] === inc) {
      res = dfs(i - 1, d, !inc, memo) + 1
    }
    if (d && i > 1 && nums[i - 2] !== nums[i] && nums[i - 2] < nums[i] === inc) {
      res = Math.max(res, dfs(i - 2, false, !inc, memo) + 1)
    }
    return (memo[inc ? 1 : 0][i][d ? 1 : 0] = res)
  }
  const m1 = new Array(2).fill(Array.from({ length: n }, () => new Array(2).fill(0)))
  const m2 = new Array(2).fill(Array.from({ length: n }, () => new Array(2).fill(0)))
  let ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dfs(i, true, true, m1), dfs(i, true, false, m2))
  }
  return ans
}

console.log(longestAlternating([2, 1, 3, 2])) //4
console.log(longestAlternating([3, 2, 1, 2, 3, 2, 1])) //4

console.log(longestAlternating([100000, 100000])) // 1

console.log(longestAlternating([1, 2, 2, 2, 1])) // 2
console.log(longestAlternating([1, 2, 2, 1, 1, 2])) // 3
