/**
 * @param {number[]} nums
 * @param {number[]} forbidden
 * @return {number}
 */
var minSwaps = function (nums, forbidden) {
  const n = nums.length
  const total = new Map()
  for (const num of nums) {
    total.set(num, (total.get(num) || 0) + 1)
  }
  for (const num of forbidden) {
    total.set(num, (total.get(num) || 0) + 1)
  }
  for (const count of total.values()) {
    if (count > n) {
      return -1
    }
  }
  const same = new Map()
  let k = 0
  for (let i = 0; i < n && i < forbidden.length; i++) {
    if (nums[i] === forbidden[i]) {
      const num = nums[i]
      same.set(num, (same.get(num) || 0) + 1)
      k++
    }
  }
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
