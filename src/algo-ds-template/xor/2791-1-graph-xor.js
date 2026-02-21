class Solution {
  countPalindromePaths(parent, s) {
    const n = s.length
    const g = Array.from({ length: n }, () => [])
    for (let i = 1; i < n; i++) {
      const p = parent[i]
      g[p].push(i)
    }

    const cnt = { 0: 1 }
    let total = 0

    const dfs = (v, xor) => {
      let res = 0
      for (const w of g[v]) {
        const charCode = s.charCodeAt(w) - 'a'.charCodeAt(0)
        const bit = 1 << charCode
        const x = xor ^ bit
        res += cnt[x] || 0
        for (let i = 0; i < 26; i++) {
          const target = x ^ (1 << i)
          res += cnt[target] || 0
        }
        cnt[x] = (cnt[x] || 0) + 1
        res += dfs(w, x)
      }
      return res
    }
    total = dfs(0, 0)
    return total
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1（简单树形结构）
const parent1 = [-1, 0, 0, 1, 1]
const s1 = 'ababa'
console.log(solution.countPalindromePaths(parent1, s1)) // 输出参考：符合条件的回文路径数

// 测试用例2（单节点）
const parent2 = [-1]
const s2 = 'a'
console.log(solution.countPalindromePaths(parent2, s2)) // 输出：0（无路径）
