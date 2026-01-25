var maxCapacity = function (costs, capacity, budget) {
  const n = costs.length
  let res = 0
  const dfs = (i, t, b) => {
    if (i >= n || t >= 2 || b <= 0) {
      return 0
    }
    let ret = dfs(i + 1, t, b)
    if (b >= costs[i] && t < 2) {
      ret = Math.max(ret, capacity[i] + dfs(i + 1, t + 1, budget - costs[i]))
    }
    return ret
  }
  res = dfs(0, 0, budget)
  return res
}

console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8))
