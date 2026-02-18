var getMinimumDifference = function (root) {
  let ans = Infinity
  const dfs = (node) => {
    if (!node) {
      return
    }
    if (node.left) {
      ans = Math.min(ans, node.val - node.left)
      dfs(node.left)
    }
    if (node.right) {
      ans = Math.min(ans, node.right.val - node.val)
      dfs(node.right)
    }
  }
  dfs(root)
  return ans
}
