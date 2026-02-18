/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isTrionic(nums) {
  if (nums[0] >= nums[1]) {
    return false
  }
  let cnt = 1
  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return false
    }
    const f1 = nums[i - 2] < nums[i - 1]
    const f2 = nums[i - 1] < nums[i]
    if (f1 !== f2) {
      cnt++
    }
    if (cnt > 3) {
      return false
    }
  }

  return cnt === 3
}

console.log(isTrionic([1, 3, 5, 4, 2, 6])) // true
console.log(isTrionic([2, 1, 3])) // false
console.log(isTrionic([2, 4, 3, 3])) // false
