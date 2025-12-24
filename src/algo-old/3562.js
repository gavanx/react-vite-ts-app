/**
 * @param {number} n - 物品数量
 * @param {number[]} present - 当前价格/成本
 * @param {number[]} future - 未来价格/价值
 * @param {number[][]} hierarchy - 依赖关系 [[父节点, 子节点], ...]
 * @param {number} budget - 预算
 * @return {number} - 最大利润
 */
var maxProfit = function (n, present, future, hierarchy, budget) {
  // 构建邻接表（树结构）
  const g = Array.from({ length: n }, () => [])
  for (const [x, y] of hierarchy) {
    g[x - 1].push(y - 1)
  }

  // 定义fmax函数
  const fmax = (a, b) => (b > a ? b : a)
  const INF_NEG = -Infinity

  /**
   * DFS计算子树的最大利润
   * @param {number} x - 当前节点索引
   * @returns {number[][]} - 返回两个dp数组，[0]表示不买当前节点，[1]表示买当前节点
   */
  const dfs = (x) => {
    // sub_f[0]: 不买当前节点时的dp
    // sub_f[1]: 买当前节点时的dp
    const sub_f = [Array(budget + 1).fill(INF_NEG), Array(budget + 1).fill(INF_NEG)]
    sub_f[0][0] = 0
    sub_f[1][0] = 0

    // 处理所有子节点
    for (const y of g[x]) {
      const fy = dfs(y)

      // 处理不买当前节点的情况
      const nf0 = Array(budget + 1).fill(INF_NEG)
      nf0[0] = 0

      // 处理买当前节点的情况
      const nf1 = Array(budget + 1).fill(INF_NEG)
      nf1[0] = 0

      // 遍历子节点可能的两个状态
      for (let k = 0; k <= 1; k++) {
        const fyk = fy[k]

        // 如果子节点价值为负，跳过优化
        for (let jy = 0; jy <= budget; jy++) {
          if (fyk[jy] < 0) continue

          // 合并到不买当前节点的状态
          for (let j = budget; j >= jy; j--) {
            if (sub_f[0][j - jy] > INF_NEG) {
              nf0[j] = fmax(nf0[j], sub_f[0][j - jy] + fyk[jy])
            }
          }

          // 合并到买当前节点的状态
          for (let j = budget; j >= jy; j--) {
            if (sub_f[1][j - jy] > INF_NEG) {
              nf1[j] = fmax(nf1[j], sub_f[1][j - jy] + fyk[jy])
            }
          }
        }
      }

      sub_f[0] = nf0
      sub_f[1] = nf1
    }

    // 计算当前节点的最终结果
    const f = [Array(budget + 1).fill(INF_NEG), Array(budget + 1).fill(INF_NEG)]
    f[0][0] = 0
    f[1][0] = 0

    // 情况1: 不买当前节点
    for (let j = 0; j <= budget; j++) {
      f[0][j] = sub_f[0][j]
    }

    // 情况2: 买当前节点
    const cost = present[x]
    const profit = future[x] - present[x] // 利润 = 未来价值 - 当前成本

    for (let j = cost; j <= budget; j++) {
      if (sub_f[1][j - cost] > INF_NEG) {
        f[1][j] = fmax(f[1][j], sub_f[1][j - cost] + profit)
      }
    }

    return f
  }

  const result = dfs(0)
  // 返回根节点不买或买中的最大值
  return Math.max(...result[0])
}

console.log(
  maxProfit(
    3,
    [4, 6, 8],
    [7, 9, 11],
    [
      [1, 2],
      [1, 3],
    ],
    10
  )
)
