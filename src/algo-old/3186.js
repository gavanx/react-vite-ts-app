var maximumTotalDamage = function (power) {
  const n = power.length
  const cnt = new Map()
  let v
  for (let i = 0; i < n; i++) {
    v = power[i]
    cnt.set(v, (cnt.get(v) || 0) + 1)
  }
  const a = [...cnt.keys()].sort((a, b) => a - b)
  const n2 = a.length
  const c = new Map()
  const dfs = (i) => {
    if (i < 0) return 0
    if (c.has(i)) return c.get(i)
    let j = i - 1
    while (j >= 0 && a[i] - a[j] <= 2) {
      j--
    }
    const ret = Math.max(dfs(i - 1), dfs(j) + a[i] * cnt.get(a[i]))
    c.set(i, ret)
    return ret
  }
  return dfs(n2 - 1)
}

console.log(maximumTotalDamage([1, 1, 3, 4])) // [1,3,4]
console.log(maximumTotalDamage([7, 1, 6, 6]))
