/**
 * 将数组中的 m 个数字通过增加操作，使得它们的按位与结果最大
 * @param {number[]} nums
 * @param {number} k
 * @param {number} m
 * @return {number}
 */
var maximumAND = function (nums, k, m) {
  const n = nums.length
  const ops = new Array(n).fill(0)
  let ans = 0
  let maxNum = Math.max(...nums)
  const maxWidth = (maxNum + k).toString(2).length
  for (let bit = maxWidth - 1; bit >= 0; bit--) {
    const candidate = ans | (1 << bit)
    let target = candidate
    for (let i = 0; i < n; i++) {
      const x = nums[i]
      if ((x & target) === target) {
        ops[i] = 0
      } else {
        let diff = target & ~x
        if (diff === 0) {
          ops[i] = 0
        } else {
          let highestDiffBit = 0
          while (diff > 0) {
            highestDiffBit++
            diff >>= 1
          }
          let needed = 0
          let mask = 0
          if (x < target) {
            needed = target - x
          } else {
            let y = x
            let clearMask = ~((1 << highestDiffBit) - 1)
            y &= clearMask
            y |= 1 << (highestDiffBit - 1)
            y |= ((1 << (highestDiffBit - 1)) - 1) & target
            needed = y - x
          }
          ops[i] = needed
        }
      }
    }
    const sortedOps = [...ops].sort((a, b) => a - b)
    let totalOps = 0
    for (let i = 0; i < m; i++) {
      totalOps += sortedOps[i]
    }
    if (totalOps <= k) {
      ans = candidate
    }
  }

  return ans
}

console.log(maximumAND([3, 1, 2], 8, 2))
console.log(maximumAND([1, 2, 8, 4], 7, 3))
console.log(maximumAND([1, 1], 3, 2))
