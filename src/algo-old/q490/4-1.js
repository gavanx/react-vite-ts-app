var countSequences = function (nums, k) {
  const n = nums.length
  const dfs = (i, op) => {
    if (i === n) {
      let v = 1
      const mul = {}
      const div = {}
      for (let j = 0; j < n; j++) {
        if(op[j] === 0)
      }
      return Math.abs(v - k) < 1000 * Number.EPSILON ? 1 : 0
    }
    return dfs(i + 1, [...op, 0]) + dfs(i + 1, [...op, 1]) + dfs(i + 1, [...op, 2])
  }
  return dfs(0, [])
}

console.log(countSequences([2, 3, 2], 6))
console.log(countSequences([4, 6, 3], 2))
console.log(countSequences([5, 3, 5], 3)) // 3
console.log(countSequences([5, 6, 3, 5], 6)) // 3
console.log(countSequences([5, 6, 5, 3, 4, 2], 18)) // 3
console.log(countSequences([3, 5, 6, 3, 5, 5, 1, 3, 2], 180)) // 3
console.log(countSequences([5, 5, 6, 5, 6, 4, 1, 3, 3, 3], 648)) // 3
