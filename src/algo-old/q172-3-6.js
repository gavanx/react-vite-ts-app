function maxScore(nums, s) {
  const n = nums.length

  const ones = []
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones.push(i)
  }

  const k = ones.length
  if (k === 0) return 0

  let result = 0

  for (let i = k - 1; i >= 0; i--) {
    let bestVal = nums[ones[i]]
    let bestPos = ones[i]

    for (let pos = i; pos <= ones[i]; pos++) {
      if (nums[pos] > bestVal) {
        bestVal = nums[pos]
        bestPos = pos
      }
    }

    result += bestVal

    if (i > 0) {
      ones[i - 1] = Math.min(ones[i - 1], bestPos - 1)
    }
  }

  return result
}

console.log(maxScore([4, 4, 3, 10, 6, 3, 9, 8], '00010010') === 19) // 19
