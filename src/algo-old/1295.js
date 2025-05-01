var findNumbers = function (nums) {
  const n = nums.length
  let count = 0
  for (let i = 0; i < n; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++
    }
  }
  return count
}
