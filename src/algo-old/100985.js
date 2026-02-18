var dominantIndices = function (nums) {
  const n = nums.length
  let s = nums[n - 1]
  let avg = s
  let ans = 0
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > avg) {
      ans++
    }
    s += nums[i]
    avg = s / (n - i)
  }
  return ans
}

console.log(dominantIndices([5, 4, 3]))
console.log(dominantIndices([4, 1, 2]))
