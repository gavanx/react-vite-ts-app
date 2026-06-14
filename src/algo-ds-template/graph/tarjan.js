/**
 * @param {number} n 节点数
 * @param {number[][]} graph 邻接表
 * @returns {[number, number][]} 所有桥
 */
function tarjanBridge(n, graph) {
  const dfn = new Array(n + 1).fill(0)
  const low = new Array(n + 1).fill(0)
  let time = 1
  const bridges = []

  function dfs(u, parent) {
    dfn[u] = low[u] = time++

    for (const v of graph[u]) {
      if (v === parent) continue // 跳过父节点，无向图防回头

      if (!dfn[v]) {
        dfs(v, u)
        // 树边：用子节点追溯值更新
        low[u] = Math.min(low[u], low[v])
        // 判定桥：low[v] > dfn[u]
        if (low[v] > dfn[u]) {
          bridges.push([u, v])
        }
      } else {
        // 回边
        low[u] = Math.min(low[u], dfn[v])
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!dfn[i]) dfs(i, -1)
  }
  return bridges
}

// 测试
const g2 = [[], [2, 3], [1, 4], [1], [2]]
console.log(tarjanBridge(4, g2))
