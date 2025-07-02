var canMakeEqual = function (nums, k) {
  const f = (nums, k, target) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== target) {
        if (k === 0) return false
        k--
        nums[i + 1] = -nums[i + 1]
      }
    }
    return true
  }
  return f(nums.slice(), k, -1) || f(nums, k, 1)
}

console.log(canMakeEqual([1, -1, 1, -1, 1], 3))
console.log(canMakeEqual([-1, -1, -1, 1, 1, 1], 5))
