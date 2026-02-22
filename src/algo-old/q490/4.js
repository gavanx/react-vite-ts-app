var countSequences = function (nums, k) {
  const n = nums.length
  const memo = new Map()
  const T = 100000 * Number.EPSILON
  const dfs = (i, v) => {
    if (i === n) {
      return Math.abs(v - k) < T ? 1 : 0
    }
    const key = `${i}-${v}`
    if (memo.has(key)) {
      return memo.get(key)
    }
    const x = nums[i]
    const res = dfs(i + 1, v * x) + dfs(i + 1, v / x) + dfs(i + 1, v)
    memo.set(key, res)
    return res
  }
  return dfs(0, 1)
}

console.log(countSequences([2, 3, 2], 6)) // 2
console.log(countSequences([4, 6, 3], 2)) // 2
console.log(countSequences([5, 3, 5], 3)) // 3
console.log(countSequences([5, 6, 3, 5], 6)) // 3
console.log(countSequences([5, 6, 5, 3, 4, 2], 18)) // 3
console.log(countSequences([3, 5, 6, 3, 5, 5, 1, 3, 2], 180)) //108
console.log(countSequences([5, 5, 6, 5, 6, 4, 1, 3, 3, 3], 648)) // 42
