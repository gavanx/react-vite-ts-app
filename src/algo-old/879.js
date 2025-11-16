var profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length
  const dfs = (i, n, p) => {
    if (i === m) return p >= minProfit ? 1 : 0
    let res = dfs(i + 1, n, p)
    if (n >= group[i]) {
      res += dfs(i + 1, n - group[i], p + profit[i])
    }
    return res % (1e9 + 7)
  }
  return dfs(0, n, 0)
}

console.log(profitableSchemes(5, 3, [2, 2], [2, 3]))
console.log(profitableSchemes(10, 5, [2, 3, 5], [6, 7, 8]))
