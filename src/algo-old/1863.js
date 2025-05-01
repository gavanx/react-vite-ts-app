var subsetXORSum = function (nums) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < 1 << n; i++) {
    let xor = 0
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) {
        xor ^= nums[j]
      }
    }
    sum += xor
  }
  return sum
}
