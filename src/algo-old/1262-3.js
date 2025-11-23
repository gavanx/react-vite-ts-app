var maxSumDivThree = function (nums) {
  const n = nums.length
  var f = Array.from({ length: n + 1 }, () => Array(3).fill(0))
  f[0][1] = f[0][2] = -Infinity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      f[i + 1][j] = Math.max(f[i][j], f[i][(j + nums[i]) % 3] + nums[i])
    }
  }
  return f[n][0]
}

console.log(maxSumDivThree([3, 6, 5, 1, 8])) // 18
console.log(maxSumDivThree([4])) // 0
console.log(maxSumDivThree([1, 2, 3, 4, 4])) // 12
