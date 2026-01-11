var getAverages = function (nums, k) {
  const n = nums.length
  const ans = new Array(n).fill(-1)
  const sum = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }
  for (let i = k; i < n - k; i++) {
    ans[i] = Math.floor((sum[i + k + 1] - sum[i - k]) / (2 * k + 1))
  }
  return ans
}

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3))
console.log(getAverages([100000], 0))
console.log(getAverages([8], 100000))
