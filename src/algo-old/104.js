var maxDepth = function (root) {
  let res = 0
  const dfs = (node, level) => {
    if (node.left) {
      dfs(node.left, level + 1)
    }
    if (node.right) {
      dfs(node.right, level + 1)
    }
    res = Math.max(res, level)
  }
  dfs(root, 1)
  return res
}
