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

  // 1. Collect bad indices and count frequencies
  for (let i = 0; i < n; i++) {
    if (nums[i] === forbidden[i]) {
      badIndices.push(i)
    }
    numsCount.set(nums[i], (numsCount.get(nums[i]) || 0) + 1)
    forbiddenCount.set(forbidden[i], (forbiddenCount.get(forbidden[i]) || 0) + 1)
  }

  // 2. Check feasibility
  // Condition: For any value x, count(nums, x) + count(forbidden, x) <= n
  for (const [num, count] of numsCount) {
    if (count + (forbiddenCount.get(num) || 0) > n) {
      return -1
    }
  }

  const k = badIndices.length
  if (k === 0) return 0

  // 3. Find max frequency in bad indices
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

  // 4. Calculate result
  // If maxC <= k/2, we can pair up all bad indices (or leave 1 if odd). Swaps = ceil(k/2).
  // If maxC > k/2, we pair (k - maxC) non-majority with (k - maxC) majority.
  // Remaining (2*maxC - k) majority items must be swapped with good indices.
  // Total swaps = (k - maxC) + (2*maxC - k) = maxC.
  return Math.max(maxC, Math.ceil(k / 2))
}

console.log(minimumSwaps([1, 2, 3], [3, 2, 1])) //  1
console.log(minimumSwaps([4, 6, 6, 5], [4, 6, 5, 5])) //  2
console.log(minimumSwaps([7, 7], [8, 7])) //  -1
console.log(minimumSwaps([1, 2], [2, 1])) //  0