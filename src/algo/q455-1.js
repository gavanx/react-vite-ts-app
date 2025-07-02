var checkPrimeFrequency = function (nums) {
  let map = new Map()
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1)
  }
  let prime = new Set([
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
  ])
  for (let [k, v] of map) {
    if (prime.has(v)) return true
  }
  return false
}
