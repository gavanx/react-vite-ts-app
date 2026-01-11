var isSymmetric = function (root) {
  const dfs = (left, right) => {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false
    return dfs(left.left, right.right) && dfs(left.right, right.left)
  }
  return dfs(root.left, root.right)
}
