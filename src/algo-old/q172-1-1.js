var minOperations = function (nums) {
  const n = nums.length
  const freq = new Map()
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1)
  }
  let dupCount = 0
  for (const count of freq.values()) {
    if (count > 1) dupCount++
  }
  if (dupCount === 0) return 0
  let operations = 0
  let start = 0
  while (start < n && dupCount > 0) {
    for (let i = 0; i < 3 && start < n; i++) {
      const num = nums[start]
      const oldCount = freq.get(num)
      if (oldCount === 2) {
        dupCount--
      }
      freq.set(num, oldCount - 1)
      start++
    }
    operations++
  }
  return operations
}
console.log(minOperations([1, 2, 3, 4, 5])) // 0
console.log(minOperations([1, 2, 3, 1, 2, 3])) // 1
console.log(minOperations([1, 1, 1, 2, 2, 3])) // 2
console.log(minOperations([1])) // 0
console.log(minOperations([1, 1])) // 1
