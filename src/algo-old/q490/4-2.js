var countSequences = function (nums, k) {
  const n = nums.length
  const T = 100000 * Number.EPSILON
  const nums2 = nums.filter((n) => n > 1)
  const dfs = (i, arr) => {
    if (i === n) {
      let v = 1
      arr.forEach((c, i) => {
        const b = i + 2
        if (c > 0) {
          while (c > 0) {
            v *= b
            c--
          }
        } else if (c < 0) {
          while (c < 0) {
            v /= b
            c++
          }
        }
      })
      return Math.abs(v - k) < T ? 1 : 0
    }
    const x = nums2[i]
    const args = [[...arr], [...arr]]
    args[0][x - 2]++
    args[1][x - 2]--
    return dfs(i + 1, args[0]) + dfs(i + 1, args[1]) + dfs(i + 1, arr)
  }
  return dfs(0, [0, 0, 0, 0, 0])
}

// console.log(countSequences([2, 3, 2], 6))
// console.log(countSequences([4, 6, 3], 2))
console.log(countSequences([5, 3, 5], 3)) // 3
// console.log(countSequences([5, 6, 3, 5], 6)) // 3
// console.log(countSequences([5, 6, 5, 3, 4, 2], 18)) // 3
console.log(countSequences([3, 5, 6, 3, 5, 5, 1, 3, 2], 180)) //108
// console.log(countSequences([5, 5, 6, 5, 6, 4, 1, 3, 3, 3], 648)) // 42
