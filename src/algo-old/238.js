var productExceptSelf = function (nums) {
  const n = nums.length
  const pre = Array.from(n + 1).fill(0)
  const post = Array.from(n + 1).fill(0)
  pre[0] = 1
  post[n] = 1
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] * nums[i]
    post[n - i - 1] = post[n - i] * nums[n - i - 1]
  }
  return pre.slice(0, -1).map((v, i) => v * post[i + 1])
}

console.log(productExceptSelf([1, 2, 3, 4]))
