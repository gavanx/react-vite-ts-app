var checkEqualPartitions = function (nums, target) {
  const n = nums.length
  const max = Math.pow(2, n)
  let b, s1, s2
  for (let i = 1; i < max; i++) {
    b = i.toString(2).split('').reverse()
    s1 = 1
    s2 = 1
    for (let j = 0; j < n; j++) {
      if (b[j] === '1') {
        s1 *= nums[j]
      } else {
        s2 *= nums[j]
      }
    }
    if (s1 === target && s2 === target) {
      return true
    }
  }
  return false
}

// console.log(checkEqualPartitions([3, 1, 6, 8, 4], 24))
// console.log(checkEqualPartitions([2, 5, 3, 7], 15))
console.log(checkEqualPartitions([4, 2, 8, 3], 8))
