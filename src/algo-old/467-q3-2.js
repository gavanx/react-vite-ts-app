function subsequenceSumAfterCapping(nums, k) {
  const n = nums.length
  const bak = [...nums]

  let left = 1,
    right = n
  let minValidX = n + 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (isPossible(mid, bak, k)) {
      minValidX = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  const ans = new Array(n).fill(false)
  if (minValidX <= n) {
    for (let i = minValidX - 1; i < n; i++) {
      ans[i] = true
    }
  }

  return ans
}

function isPossible(x, nums, k) {
  const capped = nums.map((num) => Math.min(num, x))
  const pos = new Set()
  console.log(x, capped, nums)
  for (const num of capped) {
    if (num === k) return true
    const newSums = new Set()

    for (const s of pos) {
      const sum = s + num
      if (sum === k) return true
      newSums.add(sum)
    }

    newSums.forEach((s) => pos.add(s))
    pos.add(num)
  }
  return pos.has(k)
}

// 示例测试
// console.log(subsequenceSumAfterCapping([4, 3, 2, 4], 5)) // 输出: [true, false, true]
// console.log(subsequenceSumAfterCapping([1, 2, 3, 4, 5], 3)) // 输出: [true, true, true]
console.log(subsequenceSumAfterCapping([5, 7, 3, 5, 5, 6, 5], 16)) // 输出: [false, false]
