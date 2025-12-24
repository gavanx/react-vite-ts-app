var minCost = function (s, cost) {
  const n = s.length
  const map = new Map()
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += cost[i]
    if (!map.has(s[i])) {
      map.set(s[i], cost[i])
    } else {
      map.set(s[i], map.get(s[i]) + cost[i])
    }
  }
  let max = 0
  for (const val of map.values()) {
    if (val > max) {
      max = val
    }
  }
  return sum - max
}

console.log(minCost('aabaac', [1, 2, 3, 4, 1, 10])) // 11
console.log(minCost('abc', [10, 5, 8])) // 13
