var specialTriplets = function (nums) {
  const suf = new Map()
  const pre = new Map()
  for (const x of nums) {
    suf.set(x, (suf.get(x) || 0) + 1)
  }
  let res = 0
  let d
  for (const x of nums) {
    suf.set(x, suf.get(x) - 1)
    d = 2 * x
    res += (pre.get(d) || 0) * (suf.get(d) || 0)
    pre.set(x, (pre.get(x) || 0) + 1)
  }
  return res % (1e9 + 7)
}

console.log(specialTriplets([6, 3, 6]))
console.log(specialTriplets([0, 1, 0, 0]))
console.log(specialTriplets([8, 4, 2, 8, 4]))
