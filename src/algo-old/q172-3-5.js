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
    let maxVal = nums[ones[i]]
    const start = i
    const end = ones[i]

    for (let j = start; j <= end; j++) {
      if (nums[j] > maxVal) maxVal = nums[j]
    }

    result += maxVal

    if (i > 0) {
      let maxPos = ones[i]
      for (let j = i; j <= ones[i]; j++) {
        if (nums[j] > nums[maxPos]) maxPos = j
      }
      ones[i - 1] = Math.min(ones[i - 1], maxPos - 1)
    }
  }

  return result
}
