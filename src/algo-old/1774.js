var closestCost = function (baseCosts, toppingCosts, target) {
  let res = _.min(baseCosts)
  const dfs = (toppingCosts, i, curCost, target) => {
    if (Math.abs(res - target) < curCost - target) {
      return
    } else if (Math.abs(res - target) >= Math.abs(curCost - target)) {
      if (Math.abs(res - target) > Math.abs(curCost - target)) {
        res = curCost
      } else {
        res = Math.min(res, curCost)
      }
    }
    if (i === toppingCosts.length) {
      return
    }
    dfs(toppingCosts, i + 1, curCost + toppingCosts[i] * 2, target)
    dfs(toppingCosts, i + 1, curCost + toppingCosts[i], target)
    dfs(toppingCosts, i + 1, curCost, target)
  }
  for (const c of baseCosts) {
    dfs(toppingCosts, 0, c, target)
  }
  return res
}

console.log(closestCost([1, 7], [3, 4], 10))
