function maxScore(nums, s) {
  const n = nums.length
  const ones = []
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones.push(i)
  }
  const k = ones.length
  if (k === 0) return 0

  let prevMax = new Float64Array(n)
  let currMax = new Float64Array(n)

  let maxVal = -Infinity
  for (let j = 0; j <= ones[0]; j++) {
    if (nums[j] > maxVal) maxVal = nums[j]
    prevMax[j] = maxVal
  }

  for (let i = 1; i < k; i++) {
    maxVal = -Infinity
    const end = ones[i]
    const prevEnd = ones[i - 1]
    const prevMaxEnd = prevMax[prevEnd]

    for (let j = i; j <= end; j++) {
      const prevVal = j - 1 <= prevEnd ? prevMax[j - 1] : prevMaxEnd
      const val = prevVal + nums[j]
      if (val > maxVal) maxVal = val
      currMax[j] = maxVal
    }

    const temp = prevMax
    prevMax = currMax
    currMax = temp
  }

  return prevMax[ones[k - 1]]
}
