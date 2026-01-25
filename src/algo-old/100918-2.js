function alternatingXOR(nums, target1, target2) {
  const MOD = 1000000007
  const f1 = new Map() // 奇数次操作
  const f2 = new Map() // 偶数次操作
  f2.set(0, 1) // 初始状态

  let preSum = 0

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i]
    preSum ^= x

    // 计算以当前元素结尾，最后一段异或和为 target1 的方案数
    const last1 = (f2.get(preSum ^ target1) || 0) % MOD
    // 计算以当前元素结尾，最后一段异或和为 target2 的方案数
    const last2 = (f1.get(preSum ^ target2) || 0) % MOD

    // 如果是最后一个元素，返回结果
    if (i === nums.length - 1) {
      return (last1 + last2) % MOD
    }

    // 更新状态
    f1.set(preSum, ((f1.get(preSum) || 0) + last1) % MOD)
    f2.set(preSum, ((f2.get(preSum) || 0) + last2) % MOD)
  }

  return 0 // 理论上不会执行到这里
}

console.log(alternatingXOR([2, 3, 1, 4], 1, 5))
console.log(alternatingXOR([1, 0, 0], 1, 0))
console.log(alternatingXOR([7], 1, 7))