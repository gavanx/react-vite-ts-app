class Solution {
  minimumFlips(n, edges, start, target) {
    const g = Array.from({ length: n }, () => [])
    edges.forEach(([x, y], i) => {
      g[x].push([y, i])
      g[y].push([x, i])
    })
    const ans = []

    const dfs = (x, fa) => {
      let rev = start[x] !== target[x]
      for (const [y, i] of g[x]) {
        if (y === fa) continue
        if (dfs(y, x)) {
          ans.push(i)
          rev = !rev
        }
      }
      return rev
    }
    const rootNeedRev = dfs(0, -1)
    if (rootNeedRev) {
      return [-1]
    }
    ans.sort((a, b) => a - b)
    return ans
  }
}

// 测试示例
const solution = new Solution()
// 测试用例1：简单树形结构
const n1 = 3
const edges1 = [
  [0, 1],
  [0, 2],
]
const start1 = ['0', '1', '0'] // 节点0:0, 节点1:1, 节点2:0
const target1 = ['0', '0', '1'] // 目标状态：节点0:0, 节点1:0, 节点2:1
console.log(solution.minimumFlips(n1, edges1, start1, target1))
// 预期输出：[0,1]（翻转边0和边1，或验证逻辑是否匹配）

// 测试用例2：根节点无法匹配的情况
const n2 = 2
const edges2 = [[0, 1]]
const start2 = ['0', '0']
const target2 = ['1', '0']
console.log(solution.minimumFlips(n2, edges2, start2, target2))
// 输出：[-1]（根节点0需要翻转，但无父节点）
