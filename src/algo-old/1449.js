var largestNumber = function (cost, target) {
  let res = ''
  const dfs = (t, c) => {
    if (t < 0) {
      return
    }
    if (t === 0) {
      if (res.length < c.length) {
        res = c
      } else if (res.length === c.length && res < c) {
        res = c
      }
    }
    for (let i = 0; i < cost.length; i++) {
      if (cost[i] <= t) {
        dfs(t - cost[i], c + (i + 1))
      }
    }
  }
  dfs(target, '')
  return res.length === 0 ? '0' : res
}

console.log(largestNumber([4, 3, 2, 5, 6, 7, 2, 5, 5], 9))

console.log(largestNumber([7, 6, 5, 5, 5, 6, 8, 7, 8], 12))

console.log(largestNumber([2, 4, 6, 2, 4, 6, 4, 4, 4], 5))

console.log(largestNumber([6, 10, 15, 40, 40, 40, 40, 40, 40], 47))
