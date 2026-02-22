var countSequences = function (nums, k) {
  const f = (x) => {
    let e2 = 0
    let e3 = 0
    let e5 = 0
    if (x != 0) {
      const lowestBit = x & -x
      e2 = Math.floor(Math.log2(lowestBit))
      x = Math.floor(x / (1 << e2))
    }
    while (x % 3 === 0) {
      x = x / 3
      e3++
    }
    while (x % 5 === 0) {
      x = x / 5
      e5++
    }
    return [e2, e3, e5, x]
  }
  const [e2, e3, e5, x] = f(k)
  if (x !== 1) {
    return 0
  }
  nums = nums.map((x) => f(x))
  const cache = {}
  const dfs = (i, e2, e3, e5) => {
    if (i < 0) {
      return e2 == 0 && e3 == 0 && e5 == 0 ? 1 : 0
    }
    const key = `${i}-${e2}-${e3}-${e5}`
    if (cache[key]) {
      return cache[key]
    }
    const e = nums[i]
    return cache[key] = (
      dfs(i - 1, e2 + e[0], e3 + e[1], e5 + e[2]) +
      dfs(i - 1, e2 - e[0], e3 - e[1], e5 - e[2]) +
      dfs(i - 1, e2, e3, e5)
    )
  }
  return dfs(nums.length - 1, e2, e3, e5)
}

console.log(countSequences([2, 3, 2], 6)) // 2
console.log(countSequences([4, 6, 3], 2)) // 2
console.log(countSequences([5, 3, 5], 3)) // 3
console.log(countSequences([5, 6, 3, 5], 6)) // 3
console.log(countSequences([5, 6, 5, 3, 4, 2], 18)) // 3
console.log(countSequences([3, 5, 6, 3, 5, 5, 1, 3, 2], 180)) //108
console.log(countSequences([5, 5, 6, 5, 6, 4, 1, 3, 3, 3], 648)) // 42
