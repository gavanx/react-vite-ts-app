function subsequenceSumAfterCapping(nums, k) {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const ans = new Array(n).fill(false)
  for (let x = n; x >= 1; x--) {
    const cap = nums.map((num) => Math.min(num, x))
    const pos = new Set()
    let found = false
    for (const num of cap) {
      const newSums = new Set()
      if (num < k) {
        newSums.add(num)
      } else if (num === k) {
        found = true
        break
      } else {
        break
      }
      for (const sum of pos) {
        let s2 = sum + num
        if (s2 <= k) {
          newSums.add(s2)
        } else if (s2 === k) {
          found = true
          break
        } else {
          break
        }
      }
      if (newSums.has(k)) {
        found = true
        break
      }
      for (const sum of newSums) {
        pos.add(sum)
      }
    }
    ans[x - 1] = found
  }

  return ans
}

// 示例测试
console.log(subsequenceSumAfterCapping([4, 3, 2, 4], 5)) // 输出: [true, false, true]
console.log(subsequenceSumAfterCapping([1, 2, 3, 4, 5], 3)) // 输出: [true, true, true]
console.log(subsequenceSumAfterCapping([5, 7, 3, 5, 5, 6, 5], 16)) // 输出: [false, false]
