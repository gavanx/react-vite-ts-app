/**
 * @param {number[]} nums
 * @param {number[]} forbidden
 * @return {number}
 */
var minimumSwaps = function (nums, forbidden) {
  const n = nums.length
  const badIndices = []
  const numsCount = new Map()
  const forbiddenCount = new Map()

  for (let i = 0; i < n; i++) {
    if (nums[i] === forbidden[i]) {
      badIndices.push(i)
    }
    numsCount.set(nums[i], (numsCount.get(nums[i]) || 0) + 1)
    forbiddenCount.set(forbidden[i], (forbiddenCount.get(forbidden[i]) || 0) + 1)
  }

  for (const [num, count] of numsCount) {
    if (count + (forbiddenCount.get(num) || 0) > n) {
      return -1
    }
  }

  const k = badIndices.length
  if (k === 0) return 0

  const badValCounts = new Map()
  let maxC = 0

  for (const idx of badIndices) {
    const val = nums[idx]
    const c = (badValCounts.get(val) || 0) + 1
    badValCounts.set(val, c)
    if (c > maxC) {
      maxC = c
    }
  }

  return Math.max(maxC, Math.ceil(k / 2))
}

console.log(minimumSwaps([1, 2, 3], [3, 2, 1])) //  1
console.log(minimumSwaps([4, 6, 6, 5], [4, 6, 5, 5])) //  2
console.log(minimumSwaps([7, 7], [8, 7])) //  -1
console.log(minimumSwaps([1, 2], [2, 1])) //  -1