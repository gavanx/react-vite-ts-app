var countPartitions = function (nums) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }
  if (sum % 2 === 1) return 0
  return n - 1
}

console.log(countPartitions([10, 10, 3, 7, 6]))
console.log(countPartitions([1, 2, 2]))
console.log(countPartitions([2, 4, 6, 8]))
