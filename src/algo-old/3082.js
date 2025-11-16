var sumOfPower = function (nums, k) {
  const MOD = 1_000_000_007
  const n = nums.length
  const f = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0))
  f[0][0] = 1
  for (let i = 0; i < n; i++) {
    for (let j = k; j >= nums[i]; j--) {
      for (let c = i + 1; c > 0; c--) {
        f[j][c] = (f[j][c] + f[j - nums[i]][c - 1]) % MOD
      }
    }
  }

  let ans = BigInt(0)
  let pow2 = BigInt(1)
  const MOD_BI = BigInt(MOD)
  for (let i = n; i > 0; i--) {
    ans = (ans + BigInt(f[k][i]) * pow2) % MOD_BI
    pow2 = (pow2 * BigInt(2)) % MOD_BI
  }
  return Number(ans)
}

console.log(sumOfPower([1, 2, 3], 3))
