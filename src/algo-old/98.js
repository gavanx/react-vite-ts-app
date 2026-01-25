var isValidBST = function (root) {
  const dfs = (node, low = -Infinity, high = Infinity) => {
    if (!node) return true
    if (node.val <= low || node.val >= high) return false
    return dfs(node.left, low, node.val) && dfs(node.right, node.val, high)
  }
  return dfs(root)
}
