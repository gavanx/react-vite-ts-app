function maxScore(nums, s) {
  const n = nums.length
  const ones = []
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones.push(i)
  }
  const k = ones.length
  if (k === 0) return 0

  let prevMax = new Array(n).fill(-Infinity)

  for (let j = 0; j <= ones[0]; j++) {
    prevMax[j] = nums[j]
  }
  for (let j = 1; j <= ones[0]; j++) {
    prevMax[j] = Math.max(prevMax[j], prevMax[j - 1])
  }

  for (let i = 1; i < k; i++) {
    const currMax = new Array(n).fill(-Infinity)

    for (let j = i; j <= ones[i]; j++) {
      currMax[j] = prevMax[j - 1] + nums[j]
      if (j > i) {
        currMax[j] = Math.max(currMax[j], currMax[j - 1])
      }
    }

    prevMax = currMax
  }

  return prevMax[ones[k - 1]]
}

console.log(maxScore([4, 7, 2, 9], '0000'))
console.log(maxScore([2, 1, 5, 2, 3], '01010'))
