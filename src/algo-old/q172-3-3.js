function maxScore(nums, s) {
  const n = nums.length
  const ones = []
  for (let i = 0; i < n; i++) {
    if (s[i] === '1') ones.push(i)
  }
  const k = ones.length
  if (k === 0) return 0

  let prevMax = new Array(n).fill(-Infinity)
  let currentMax = -Infinity

  for (let j = 0; j <= ones[0]; j++) {
    currentMax = Math.max(currentMax, nums[j])
    prevMax[j] = currentMax
  }
  let prevMax_ones = currentMax

  for (let i = 1; i < k; i++) {
    let currMax = new Array(n).fill(-Infinity)
    let currentRoundMax = -Infinity
    for (let j = i; j <= ones[i]; j++) {
      let prevVal = j - 1 <= ones[i - 1] ? prevMax[j - 1] : prevMax_ones
      let val = prevVal + nums[j]
      currentRoundMax = Math.max(currentRoundMax, val)
      currMax[j] = currentRoundMax
    }
    prevMax = currMax
    prevMax_ones = currentRoundMax
  }

  return prevMax[ones[k - 1]]
}

console.log(maxScore([4, 7, 2, 9], '0000') === 0)
console.log(maxScore([2, 1, 5, 2, 3], '01010') === 7)
console.log(maxScore([4, 4, 3, 10, 6, 3, 9, 8], '00010010') === 19)