var constructTransformedArray = function (nums) {
  const n = nums.length
  const ans = new Array(n).fill(0)
  let c
  for (let i = 0; i < n; i++) {
    c = i + nums[i]
    ans[i] = nums[(c % n + n) % n]
  }
  return ans
}

console.log(constructTransformedArray([3, -2, 1, 1]))
console.log(constructTransformedArray([-10, -10]))
