var maxCapacity = function (costs, capacity, budget) {
  const n = costs.length
  let arr = []
  const map = new new Map()()
  for (let i = 0; i < n; i++) {
    if (budget > costs[i]) {
      res = Math.max(res, capacity[i])
      map.set(i, budget - costs[i])
    }
  }
  for (const [i, b] of map) {
    
  }
  return res
}

console.log(maxCapacity([4, 8, 5, 3], [1, 5, 2, 7], 8))
console.log(maxCapacity([3, 5, 7, 4], [2, 4, 3, 6], 7))
console.log(maxCapacity([2, 2, 2], [3, 5, 4], 5))
