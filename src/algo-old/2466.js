var countGoodStrings = function (low, high, zero, one) {
  const mod = 1000000007
  const c = new Map()
  const dfs = (i) => {
    if (i === 0) {
      return 1
    } else if (i < 0) {
      return 0
    }
    if (c.has(i)) {
      return c.get(i)
    }
    const res = (dfs(i - zero) + dfs(i - one)) % mod
    c.set(i, res)
    return res
  }

  let res = 0
  for (let i = low; i <= high; i++) {
    res = (res + dfs(i)) % mod
  }
  return res
}

console.log(countGoodStrings(3, 3, 1, 1))
console.log(countGoodStrings(2, 3, 1, 2))
