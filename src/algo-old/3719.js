var longestBalanced = function (nums) {
  const m0 = new Map()
  const m1 = new Map()
  let ans = 0
  for (let i = 0; i < nums.length; i++) {
    m0.clear()
    m1.clear()
    for (let j = i; j < nums.length; j++) {
      if (nums[j] % 2 === 0) {
        m0.set(nums[j], (m0.get(nums[j]) || 0) + 1)
      } else {
        m1.set(nums[j], (m1.get(nums[j]) || 0) + 1)
      }
      if (m0.size === m1.size) {
        ans = Math.max(ans, j - i + 1)
      }
    }
  }
  return ans
}

console.log(longestBalanced([2, 5, 4, 3]))
console.log(longestBalanced([3, 2, 2, 5, 4]))
console.log(longestBalanced([1, 2, 3, 2]))
