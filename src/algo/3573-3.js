/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function (prices, k) {
  const n = prices.length
  const INF = -Infinity

  // 初始化三维DP数组
  // f[i][j][state]: 第i天，已完成j-1次交易，状态为state时的最大利润
  // state: 0-不持有股票，1-持有股票(第一次买入)，2-持有股票(第二次买入，即做多一次后又做空)
  const f = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    f[i] = new Array(k + 2)
    for (let j = 0; j <= k + 1; j++) {
      f[i][j] = new Array(3).fill(INF)
    }
  }

  // 初始状态：第0天，不持有股票，利润为0
  for (let j = 1; j <= k + 1; j++) {
    f[0][j][0] = 0
  }

  // 动态规划
  for (let i = 0; i < n; i++) {
    const p = prices[i]
    for (let j = 1; j <= k + 1; j++) {
      // 状态0: 不持有股票
      // 可以从前一天的状态0、状态1(卖出)、状态2(买入)转移过来
      f[i + 1][j][0] = Math.max(
        f[i][j][0], // 保持不持有
        f[i][j][1] + p, // 卖出股票（从状态1卖出）
        f[i][j][2] - p // 买入股票（从状态2买入，实际上是做空后的平仓）
      )

      // 状态1: 持有股票（第一次买入）
      // 可以从前一天的状态1、状态0(买入)转移过来
      f[i + 1][j][1] = Math.max(
        f[i][j][1], // 保持持有
        f[i][j - 1][0] - p // 买入股票，消耗一次交易机会
      )

      // 状态2: 持有股票（做多一次后又做空，实际上是第二次持有）
      // 可以从前一天的状态2、状态0(买入)转移过来
      f[i + 1][j][2] = Math.max(
        f[i][j][2], // 保持持有
        f[i][j - 1][0] + p // 卖出股票（实际上是做空），消耗一次交易机会
      )
    }
  }

  return f[n][k + 1][0]
}

console.log(maximumProfit([1, 7, 9, 8, 2], 2))
console.log(maximumProfit([14, 6, 10, 19], 1))
