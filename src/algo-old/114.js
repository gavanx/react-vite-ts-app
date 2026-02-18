var flatten = function (root) {
  const dfs = (node) => {
    if (!node) {
      return null
    }
    if (node.left) {
      const leftStart = node.left
      const rightStart = node.right
      node.right = leftStart
      node.left = null
      const leftEnd = dfs(leftStart)
      if (leftEnd) {
        leftEnd.right = rightStart
      }
    }
    dfs(node.right)
  }
  dfs(root)
  return root
}
