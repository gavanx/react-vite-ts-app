var countSequences = function (nums, k) {
  const primeFactorization = (k) => {
    let e2 = 0
    if (k !== 0) {
      const lowestBit = k & -k
      e2 = Math.floor(Math.log2(lowestBit))
    }
    k = Math.floor(k / (1 << e2))

    let e3 = 0
    while (k % 3 === 0) {
      e3++
      k = Math.floor(k / 3)
    }

    let e5 = 0
    while (k % 5 === 0) {
      e5++
      k = Math.floor(k / 5)
    }

    return [[e2, e3, e5], k === 1]
  }
  const [targetFactors, ok] = primeFactorization(parseInt(k))
  if (!ok) {
    return 0
  }
  const [e2Target, e3Target, e5Target] = targetFactors
  const es = nums.map((x) => primeFactorization(x)[0])

  const cache = new Map()
  const dfs = (i, e2, e3, e5) => {
    if (i < 0) {
      return e2 === 0 && e3 === 0 && e5 === 0 ? 1 : 0
    }
    const key = `${i},${e2},${e3},${e5}`
    if (cache.has(key)) {
      return cache.get(key)
    }

    const [x, y, z] = es[i]
    const res1 = dfs(i - 1, e2 - x, e3 - y, e5 - z)
    const res2 = dfs(i - 1, e2 + x, e3 + y, e5 + z)
    const res3 = dfs(i - 1, e2, e3, e5)

    const total = res1 + res2 + res3
    cache.set(key, total)
    return total
  }

  return dfs(nums.length - 1, e2Target, e3Target, e5Target)
}

// console.log(countSequences([2, 3, 2], 6)) //2
// console.log(countSequences([4, 6, 3], 2)) //2
// console.log(countSequences([5, 3, 5], 3)) // 3
// console.log(countSequences([5, 6, 3, 5], 6)) // 3
// console.log(countSequences([5, 6, 5, 3, 4, 2], 18)) // 3
// console.log(countSequences([3, 5, 6, 3, 5, 5, 1, 3, 2], 180)) //108
// console.log(countSequences([5, 5, 6, 5, 6, 4, 1, 3, 3, 3], 648)) // 42
console.log(countSequences([5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 30517578125)) // 6954
