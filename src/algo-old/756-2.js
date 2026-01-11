class Solution {
  pyramidTransition(bottom, allowed) {
    // 构建映射关系：底部两个字母 -> 顶部字母列表
    const groups = new Map()
    for (const s of allowed) {
      const key = s.substring(0, 2)
      if (!groups.has(key)) {
        groups.set(key, [])
      }
      groups.get(key).push(s[2])
    }

    const n = bottom.length
    // 初始化金字塔结构
    const pyramid = Array.from({ length: n }, (_, i) => Array(i + 1).fill(''))
    pyramid[n - 1] = bottom.split('')

    // DFS递归函数
    const dfs = (i, j) => {
      if (i < 0) return true // 所有行都已填完
      if (j > i) return dfs(i - 1, 0) // 当前行填完，转到上一行

      // 获取当前块依赖的底部两个块
      const left = pyramid[i + 1][j]
      const right = pyramid[i + 1][j + 1]
      const key = left + right

      // 如果没有可用的顶部块，返回false
      if (!groups.has(key)) return false

      // 尝试所有可能的顶部块
      for (const top of groups.get(key)) {
        pyramid[i][j] = top
        if (dfs(i, j + 1)) {
          return true
        }
      }
      return false
    }

    return dfs(n - 2, 0)
  }
}

// 测试用例
const solution = new Solution()
console.log(solution.pyramidTransition('BCD', ['BCG', 'CDE', 'GEA', 'FFF'])) // 预期输出: true

console.log(solution.pyramidTransition('AABA', ['AAA', 'AAB', 'ABA', 'ABB', 'BAC'])) // 预期输出: false

console.log(solution.pyramidTransition('AAAA', ['AAB', 'AAC', 'BCD', 'BBE', 'DEF'])) // 预期输出: false
