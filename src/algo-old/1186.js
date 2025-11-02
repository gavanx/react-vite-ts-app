var maximumSum = function (arr) {
  const dfs = (i, j) => {
    if (i >= arr.length) return -Number.MAX_VALUE
    if (j === 0) {
      return Math.max(dfs(i + 1, 0), 0) + arr[i]
    } else {
      return Math.max(dfs(i + 1, 0), arr[i] + dfs(i + 1, 1))
    }
  }
  return Math.max(dfs(0, 0), dfs(0, 1))
}
console.log(maximumSum([1, -2, 0, 3]) === 4)
console.log(maximumSum([1, -2, -2, 3]))
console.log(maximumSum([-1, -1, -1, -1]) === -1)
