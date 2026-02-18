var hasPathSum = function (root, targetSum) {
  const dfs = (node, t) => {
    if (!node && t === 0) {
      return true
    }
    return dfs(node.left, t - node.val) || dfs(node.right, t - node.val)
  }
  return dfs(root, targetSum)
}
