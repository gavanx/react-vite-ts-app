var topKFrequent = function (nums, k) {
  const map = new Map()
  for (const x of nums) {
    map.set(x, (map.get(x) || 0) + 1)
  }

  const arr = Array.from(map.entries())
  arr.sort((a, b) => b[1] - a[1])
  return arr.slice(0, k).map((x) => x[0])
}
