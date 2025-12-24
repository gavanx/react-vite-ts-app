/**
 * @param {number[]} nums
 * @param {number[]} forbidden
 * @return {number}
 */
var minSwaps = function (nums, forbidden) {
  const n = nums.length

  // 统计 nums 和 forbidden 中每个数字出现的总次数
  const total = new Map()

  // 统计 nums
  for (const num of nums) {
    total.set(num, (total.get(num) || 0) + 1)
  }

  // 统计 forbidden
  for (const num of forbidden) {
    total.set(num, (total.get(num) || 0) + 1)
  }

  // 检查是否有数字出现次数超过 n
  for (const count of total.values()) {
    if (count > n) {
      return -1
    }
  }

  // 统计相同位置上相同的数字
  const same = new Map()
  let k = 0 // 相同位置的数量

  for (let i = 0; i < n && i < forbidden.length; i++) {
    if (nums[i] === forbidden[i]) {
      const num = nums[i]
      same.set(num, (same.get(num) || 0) + 1)
      k++
    }
  }

  // 找到相同数字的最大出现次数
  let mx = 0
  for (const count of same.values()) {
    mx = Math.max(mx, count)
  }

  return Math.max(Math.ceil(k / 2), mx)
}
console.log(minSwaps([1, 2, 3], [3, 2, 1])) //  1
console.log(minSwaps([4, 6, 6, 5], [4, 6, 5, 5])) //  2
console.log(minSwaps([7, 7], [8, 7])) //  -1
console.log(minSwaps([1, 2], [2, 1])) //  0