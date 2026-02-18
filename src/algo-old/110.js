var isBalanced = function (root) {
  const height = (node) => {
    if (!node) {
      return 0
    }
    let l = 0,
      r = 0
    if (node.left) {
      l = height(node.left)
    }
    if (node.right) {
      r = height(node.right)
    }
    return Math.max(l, r) + 1
  }
  const dfs = (node) => {
    if (!node) {
      return true
    }
    let l = height(node.left)
    let r = height(node.right)
    if (Math.abs(l - r) <= 1) {
      return dfs(node.left) && dfs(node.right)
    }
    return false
  }
  return dfs(root)
}
