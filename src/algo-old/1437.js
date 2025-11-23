var kLengthApart = function (nums, k) {
  let last = -1
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) {
      if (last !== -1 && i - last <= k) return false
      last = i
    }
  }
  return true
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2))
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2))
