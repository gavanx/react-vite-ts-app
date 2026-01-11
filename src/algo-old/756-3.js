class Solution {
  pyramidTransition(bottom, allowed) {
    const groups = new Map()
    for (const s of allowed) {
      const key = s.substring(0, 2)
      if (!groups.has(key)) {
        groups.set(key, [])
      }
      groups.get(key).push(s[2])
    }

    const n = bottom.length
    const pyramid = Array.from({ length: n }, (_, i) => Array(i + 1).fill(''))
    pyramid[n - 1] = bottom.split('')

    const dfs = (i, j) => {
      if (i < 0) return true
      if (j > i) return dfs(i - 1, 0)

      const left = pyramid[i + 1][j]
      const right = pyramid[i + 1][j + 1]
      const key = left + right
      if (!groups.has(key)) return false

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
