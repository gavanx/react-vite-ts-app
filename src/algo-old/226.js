var invertTree = function (root) {
  const dfs = (node) => {
    if (!node) {
      return
    }
    const tmp = node.left
    node.left = node.right
    node.right = tmp
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return root
}
