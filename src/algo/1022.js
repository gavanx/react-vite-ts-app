var sumRootToLeaf = function (root) {
  let ans = 0
  const dfs = (node, s) => {
    if (!node) return
    if (!node.left && !node.right) {
      ans += parseInt(s + node.val, 2)
    }
    dfs(node.left, s + node.val)
    dfs(node.right, s + node.val)
  }
  return dfs(root, '')
}
