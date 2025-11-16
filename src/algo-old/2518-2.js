var countPartitions = function (nums, k) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += nums[i]
  }
  if (sum < 2 * k) return 0
  const mod = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0))
  dp[0][0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < k; j++) {
      if (j >= nums[i - 1]) {
        dp[i][j] = (dp[i - 1][j] + dp[i - 1][j - nums[i - 1]]) % mod
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  let res = 0
  for (let i = 0; i < k; i++) {
    res = (res + dp[n][i]) % mod
  }
  res = (Math.pow(2, n) % mod) - ((2 * res) % mod)
  res = (res + mod) % mod
  return res
}

console.log(countPartitions([1, 2, 3, 4], 4))
console.log(countPartitions([3, 3, 3], 4))
console.log(countPartitions([6, 6], 2))
console.log(
  countPartitions(
    [
      478, 721, 51, 352, 361, 66, 22, 807, 59, 275, 114, 169, 855, 103, 509, 592, 769, 384, 670,
      764, 382, 466, 69, 787, 69, 217, 992, 37, 805, 842, 760, 515, 442, 77, 660, 449, 471, 752,
      743, 947, 616, 246, 46, 973, 860, 264, 852, 675, 139, 60, 368, 554, 723, 350, 870, 710, 966,
      633, 99, 146, 175, 659, 941, 592, 614, 221, 775, 76, 228, 372, 430, 521, 248, 591, 683, 600,
      439, 58, 653, 810, 206, 488, 714, 531, 383, 251, 566, 448, 580, 627, 689, 818, 525, 321, 127,
      499, 440,
    ],
    634
  )
)
//747046415
//746482883
