class Solution {
  minimumFlips(n, edges, start, target) {
    // 步骤1：构建邻接表 g[x] = [[y, 边索引], ...]
    const g = Array.from({ length: n }, () => []);
    edges.forEach(([x, y], i) => {
      g[x].push([y, i]);
      g[y].push([x, i]);
    });

    const ans = []; // 存储需要翻转的边索引

    // 步骤2：DFS 后序遍历，返回当前节点到父节点的边是否需要翻转
    const dfs = (x, fa) => {
      // 初始状态：当前节点与目标状态是否不一致（决定是否需要翻转x-fa边）
      let rev = start[x] !== target[x];

      // 遍历当前节点的所有邻接节点
      for (const [y, i] of g[x]) {
        // 跳过父节点，避免回走
        if (y === fa) continue;

        // 递归遍历子节点，若子节点返回true（需要翻转y-x边）
        if (dfs(y, x)) {
          ans.push(i); // 记录该边索引
          rev = !rev;  // 子节点翻转后，当前节点状态被反转
        }
      }

      return rev;
    };

    // 步骤3：从根节点（0）开始DFS，父节点为-1
    const rootNeedRev = dfs(0, -1);
    if (rootNeedRev) {
      // 根节点无父节点，无法翻转，返回[-1]
      return [-1];
    }

    // 步骤4：边索引按升序排序后返回
    ans.sort((a, b) => a - b);
    return ans;
  }
}

// 测试示例
const solution = new Solution();
// 测试用例1：简单树形结构
const n1 = 3;
const edges1 = [[0, 1], [0, 2]];
const start1 = ['0', '1', '0']; // 节点0:0, 节点1:1, 节点2:0
const target1 = ['0', '0', '1']; // 目标状态：节点0:0, 节点1:0, 节点2:1
console.log(solution.minimumFlips(n1, edges1, start1, target1));
// 预期输出：[0,1]（翻转边0和边1，或验证逻辑是否匹配）

// 测试用例2：根节点无法匹配的情况
const n2 = 2;
const edges2 = [[0, 1]];
const start2 = ['0', '0'];
const target2 = ['1', '0'];
console.log(solution.minimumFlips(n2, edges2, start2, target2));
// 输出：[-1]（根节点0需要翻转，但无父节点）