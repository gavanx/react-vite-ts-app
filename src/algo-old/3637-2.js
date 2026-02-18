/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isTrionic(nums) {
  // 一开始必须是递增的
  if (nums[0] >= nums[1]) {
    return false
  }

  let cnt = 1

  for (let i = 2; i < nums.length; i++) {
    // 相邻元素不能相等
    if (nums[i - 1] === nums[i]) {
      return false
    }

    // 判断单调性是否发生变化
    const prevIncreasing = nums[i - 2] < nums[i - 1]
    const currIncreasing = nums[i - 1] < nums[i]

    if (prevIncreasing !== currIncreasing) {
      cnt++
    }
  }

  // 一定是增减增，所以变化次数为3
  return cnt === 3
}

console.log(isTrionic([1, 3, 5, 4, 2, 6])) // true
console.log(isTrionic([2, 1, 3])) // false
console.log(isTrionic([2, 4, 3, 3])) // false
