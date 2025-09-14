var findCoins = function (numWays) {
  // 处理特殊情况
  if (!numWays || numWays[0] !== 1) {
    return []
  }

  const n = numWays.length
  const dp = [...numWays] // 复制一份作为动态规划数组
  const coins = [] // 存储找到的硬币面值

  // 从金额1开始遍历
  for (let i = 1; i < n; i++) {
    // 如果凑出金额i的方法数为0，说明i不能被凑出，不可能是硬币面值
    if (dp[i] === 0) {
      continue
    }

    // 假设i是一个硬币面值，验证是否合理
    // 首先，使用面值i至少有一种方法（直接使用一个面值i的硬币）
    if (dp[i] < 1) {
      continue
    }

    // 计算使用已知硬币面值凑出金额i的方法数
    let ways = 0
    for (const coin of coins) {
      if (i - coin >= 0) {
        ways += dp[i - coin]
      }
    }

    // 如果计算出的方法数与给定的方法数不符，说明i不是硬币面值
    if (ways !== dp[i]) {
      continue
    }

    // 确认i是一个硬币面值，将其加入集合
    coins.push(i)

    // 更新动态规划数组，考虑新加入的硬币面值
    for (let j = i; j < n; j++) {
      dp[j] += dp[j - i]
    }
  }

  // 验证最终的动态规划数组是否与给定的numWays数组一致
  for (let i = 0; i < n; i++) {
    if (dp[i] !== numWays[i]) {
      return []
    }
  }

  return coins.sort((a, b) => a - b)
}

console.log(findCoins([1, 2, 2, 3, 4]))
