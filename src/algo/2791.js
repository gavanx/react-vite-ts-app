class Solution {
  countPalindromePaths(parent, s) {
    const n = s.length
    // 步骤1：构建树形邻接表（父→子）
    const g = Array.from({ length: n }, () => [])
    for (let i = 1; i < n; i++) {
      const p = parent[i]
      g[p].push(i)
    }

    // 步骤2：初始化计数器（替代Python的Counter，用对象存储异或值出现次数）
    const cnt = { 0: 1 } // 初始：空路径的异或值0出现1次
    let total = 0 // 记录最终的回文路径总数

    // 步骤3：DFS遍历树，计算异或状态并统计回文路径
    const dfs = (v, xor) => {
      let res = 0
      // 遍历当前节点的所有子节点
      for (const w of g[v]) {
        // 计算当前字符对应的二进制位（a=0位，b=1位...z=25位）
        const charCode = s.charCodeAt(w) - 'a'.charCodeAt(0)
        const bit = 1 << charCode
        const x = xor ^ bit // 新的异或状态

        // 统计符合条件的路径数：
        // 1. 异或状态完全相同（全字符偶数次）
        res += cnt[x] || 0
        // 2. 仅一个字符奇数次（异或状态仅一个位不同）
        for (let i = 0; i < 26; i++) {
          const target = x ^ (1 << i)
          res += cnt[target] || 0
        }

        // 更新计数器：当前异或状态出现次数+1
        cnt[x] = (cnt[x] || 0) + 1
        // 递归遍历子节点，累加结果
        res += dfs(w, x)
      }
      return res
    }

    // 从根节点（0）开始DFS，初始异或值为0
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
