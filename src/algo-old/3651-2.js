// 手写 min 函数（性能优化）
const min = (a, b) => (b < a ? b : a)

class Solution {
  minCost(grid, k) {
    const m = grid.length
    const n = grid[0].length

    // 找到网格中的最大值
    let mx = 0
    for (let row of grid) {
      for (let val of row) {
        mx = Math.max(mx, val)
      }
    }

    // 初始化后缀最小值数组（多分配空间防止越界）
    let suf_min_f = new Array(mx + 3)
    for (let i = 0; i < suf_min_f.length; i++) {
      suf_min_f[i] = Infinity
    }

    // 执行 k+1 次迭代
    for (let iter = 0; iter <= k; iter++) {
      const min_f = new Array(mx + 1)
      for (let i = 0; i < min_f.length; i++) {
        min_f[i] = Infinity
      }

      // 动态规划数组（空间优化版本）
      const f = new Array(n + 1)
      for (let i = 0; i < f.length; i++) {
        f[i] = Infinity
      }

      // 初始化起点（注意：起点的成本不算，所以是负值）
      f[1] = -grid[0][0]

      // 处理每一行
      for (let row of grid) {
        // 处理当前行的每个元素
        for (let j = 0; j < row.length; j++) {
          const x = row[j]

          // 核心状态转移方程
          f[j + 1] =
            (min(f[j], f[j + 1]) + x, // 常规路径
              suf_min_f[x]) // 特殊路径

          // 更新 min_f
          min_f[x] = min(min_f[x], f[j + 1])
        }
      }

      // 计算后缀最小值
      for (let i = mx; i >= 0; i--) {
        suf_min_f[i] = min(suf_min_f[i + 1], min_f[i])
      }
    }

    return f[n]
  }
}

// 使用示例
const solution = new Solution()
const grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]
const k = 2
console.log(solution.minCost(grid, k)) // 输出结果
