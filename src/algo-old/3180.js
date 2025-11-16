var maxTotalReward = function (rewardValues) {
  rewardValues = rewardValues.sort((a, b) => a - b)
  let res = 0
  const map = new Map()
  const dfs = (i, sum) => {
    const key = `${i}-${sum}`
    if (map.has(key)) {
      return map.get(key)
    }
    if (i >= rewardValues.length) {
      map.set(key, 0)
      return 0
    }
    let res = dfs(i + 1, sum)
    if (rewardValues[i] > sum) {
      res = Math.max(res, dfs(i + 1, sum + rewardValues[i]) + rewardValues[i])
    }
    map.set(key, res)
    return res
  }
  return dfs(0, 0)
}

console.log(maxTotalReward([1, 1, 3, 3]))
console.log(maxTotalReward([1, 6, 4, 3, 2]))
