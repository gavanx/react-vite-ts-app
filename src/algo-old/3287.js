var maxValue = function (nums, k) {
  const MX = 1 << 7
  const n = nums.length

  const suf = new Array(n - k + 1)
  let f = new Array(k + 1)

  for (let i = 0; i <= k; i++) {
    f[i] = new Array(MX).fill(false)
  }
  f[0][0] = true

  for (let i = n - 1; i >= k; i--) {
    const v = nums[i]
    for (let j = Math.min(k - 1, n - 1 - i); j >= 0; j--) {
      for (let x = 0; x < MX; x++) {
        if (f[j][x]) {
          f[j + 1][x | v] = true
        }
      }
    }
    if (i <= n - k) {
      suf[i] = [...f[k]]
    }
  }

  let ans = 0

  f = new Array(k + 1)
  for (let i = 0; i <= k; i++) {
    f[i] = new Array(MX).fill(false)
  }
  f[0][0] = true

  for (let i = 0; i < n - k; i++) {
    const v = nums[i]
    for (let j = Math.min(k - 1, i); j >= 0; j--) {
      for (let x = 0; x < MX; x++) {
        if (f[j][x]) {
          f[j + 1][x | v] = true
        }
      }
    }

    if (i < k - 1) {
      continue
    }

    for (let x = 0; x < MX; x++) {
      if (f[k][x]) {
        for (let y = 0; y < MX; y++) {
          if (suf[i + 1] && suf[i + 1][y]) {
            ans = Math.max(ans, x ^ y)
          }
        }
      }
    }

    if (ans === MX - 1) {
      return ans
    }
  }
  return ans
}

console.log(maxValue([2, 6, 7], 1))
console.log(maxValue([4, 2, 5, 6, 7], 2))
