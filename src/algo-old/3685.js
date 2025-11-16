var subsequenceSumAfterCapping = function (nums, k) {
  nums = nums.sort((a, b) => a - b)
  const n = nums.length
  const ans = Array.from({ length: n }, () => false)
  const f = Array.from({ length: k + 1 }, () => false)
  f[0] = true

  let i = 0
  for (let x = 1; x <= n; x++) {
    while (i < n && nums[i] == x) {
      for (let j = k; j >= nums[i]; j--) {
        f[j] = f[j] || f[j - nums[i]]
      }
      i++
    }

    for (let j = 0; j <= Math.min(n - i, Math.floor(k / x)); j++) {
      if (f[k - j * x]) {
        ans[x - 1] = true
        break
      }
    }
  }
  return ans
}
