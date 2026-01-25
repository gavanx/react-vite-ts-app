function alternatingXOR(nums, target1, target2) {
  const MOD = 1000000007
  const f1 = new Map()
  const f2 = new Map()
  f2.set(0, 1)
  let preSum = 0
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    preSum ^= x
    const last1 = (f2.get(preSum ^ target1) || 0) % MOD
    const last2 = (f1.get(preSum ^ target2) || 0) % MOD
    if (i === nums.length - 1) {
      return (last1 + last2) % MOD
    }
    f1.set(preSum, ((f1.get(preSum) || 0) + last1) % MOD)
    f2.set(preSum, ((f2.get(preSum) || 0) + last2) % MOD)
  }
  return 0
}

console.log(alternatingXOR([2, 3, 1, 4], 1, 5))
console.log(alternatingXOR([1, 0, 0], 1, 0))
console.log(alternatingXOR([7], 1, 7))
