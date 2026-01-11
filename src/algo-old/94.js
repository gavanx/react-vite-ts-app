var inorderTraversal = function (root) {
  const res = []
  const dfs = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      dfs(node.left)
    }
    res.push(node.val)
    if (node.right) {
      dfs(node.right)
    }
  }
  dfs(root)
  return res
}
