var subarraySum = function (nums, k) {
  const n = nums.length
  let ans = 0
  const pre = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] + nums[i]
  }
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (pre[j + 1] - pre[i] === k) {
        ans++
      }
    }
  }
  return ans
}
