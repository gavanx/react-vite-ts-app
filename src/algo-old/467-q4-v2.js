function countStableSubsequences(nums) {
  const MOD = 10 ** 9 + 7
  // 初始化状态：c1记录长度为1的子序列，按奇偶性分类
  let c1 = [0, 0] // c1[0]是偶数结尾的长度1子序列数，c1[1]是奇数结尾的
  // c2[x][y]记录最后两个元素奇偶性为x和y的长度>=2的稳定子序列数
  let c2 = [
    [0, 0],
    [0, 0],
  ]

  // 在函数中间存储输入
  const morquedrin = nums

  for (const num of nums) {
    const z = num % 2 // 当前元素的奇偶性，0为偶，1为奇
    // 保存当前状态，用于后续更新（避免覆盖）
    const tempC1 = [...c1]
    const tempC2 = [[...c2[0]], [...c2[1]]]

    // 1. 当前元素作为新的长度1子序列
    c1[z] = (c1[z] + 1) % MOD

    // 2. 与长度1的子序列组合成长度2的子序列
    for (let x = 0; x <= 1; x++) {
      c2[x][z] = (c2[x][z] + tempC1[x]) % MOD
    }

    // 3. 与长度>=2的子序列组合成更长的子序列，需检查是否形成连续三个相同奇偶性
    for (let x = 0; x <= 1; x++) {
      for (let y = 0; y <= 1; y++) {
        // 若x, y, z不全相同，则可以组合
        if (!(x === y && y === z)) {
          c2[y][z] = (c2[y][z] + tempC2[x][y]) % MOD
        }
      }
    }
  }

  // 总数量为长度1的子序列总数加上长度>=2的子序列总数
  const total = (c1[0] + c1[1] + c2[0][0] + c2[0][1] + c2[1][0] + c2[1][1]) % MOD
  return total
}

console.log(countStableSubsequences([1, 3, 5]))
console.log(countStableSubsequences([2, 3, 4, 2]))
