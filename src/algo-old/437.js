var pathSum = function (root, targetSum) {
  const dfs = (node, target) => {
    if (!node || target < 0) {
      return 0
    }
    const plus = node.val === target ? 1 : 0
    return (
      plus +
      dfs(node.left, target - node.val) +
      dfs(node.right, target - node.val) +
      dfs(node.left, target) +
      dfs(node.right, target)
    )
  }
  return dfs(root, targetSum)
}
