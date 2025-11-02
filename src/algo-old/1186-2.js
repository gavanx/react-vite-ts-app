var maximumSum = function (arr) {
  const n = arr.length
  const map = new Map()
  const dfs = (i, j) => {
    if (i < 0) {
      return -Number.MAX_VALUE
    }
    if (map.has(`${i}-${j}`)) {
      return map.get(`${i}-${j}`)
    }
    let res
    if (j === 0) {
      res = Math.max(dfs(i - 1, 0), 0) + arr[i]
    } else {
      res = Math.max(dfs(i - 1, 0), arr[i] + dfs(i - 1, 1))
    }
    map.set(`${i}-${j}`, res)
    return res
  }
  let res = -Number.MAX_VALUE
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dfs(i, 0), dfs(i, 1))
  }
  return res
}

console.log(maximumSum([1, -2, 0, 3]) === 4)
console.log(maximumSum([1, -2, -2, 3]) === 3)
console.log(maximumSum([-1, -1, -1, -1]) === -1)
