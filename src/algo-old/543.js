var diameterOfBinaryTree = function (root) {
  let max = 0
  const dfs = (root) => {
    if (!root) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    max = Math.max(max, left + right)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return max
}
